import $ = require('jquery');
import { Define } from 'grim.lib/src';
import 'datatables.net';
import 'datatables.net-bs';
import 'datatables.net-buttons';
import 'datatables.net-buttons-bs';
import 'datatables.net-select';
import 'datatables.net-select-bs/css/select.bootstrap.css';

import { CONSTANT_LANG_RU } from './constant/language.ru';
import { EVENTS as CONSTANT_EVENTS } from './constant/events';
import { ORDER as CONSTANT_ORDER } from './constant/order';
import { Columns } from './data-setter/columns';
import { Buttons } from './data-setter/buttons/index';

import { Toolbars } from './data-setter/toolbars/toolbars-collection';
import { ToolbarConstructor } from './data-setter/toolbars/toolbars-constructor';
import { Header } from './data-setter/header/index';
import { Ajax } from './data-setter/ajax/index';

import {
    IButtons, IColumnOptions, IColumns, IDataTable, IDataTableLanguage, IDataTableOptions, IHeader,
} from './interface';
import { IToolbarConstructor, IToolbars } from './data-setter/toolbars/interface';
import { IAjax } from './data-setter/ajax/interface';
import { DomConstructor } from './data-setter/dom-constructor/index';
import { IDomConstructor } from './data-setter/dom-constructor/interface';

const BaseDataTable = $.fn.dataTable;

// disable alerts
BaseDataTable.ext.errMode = 'throw';

export const EVENT = CONSTANT_EVENTS;

export const ORDER = CONSTANT_ORDER;

export const LANG = CONSTANT_LANG_RU;

export class DataTable implements IDataTable {
    public ['constructor']: typeof DataTable;

    public static EVENT = EVENT;

    public static ORDER = ORDER;

    public static LANG = LANG;

    public static create(element: JQuery, options: IDataTableOptions = {}): DataTable {
        return new this(element, options);
    }

    public api: DataTables.Api;

    public toolbars: IToolbars;

    public buttons: IButtons;

    public header: IHeader;

    protected element: JQuery;

    protected options: IDataTableOptions = {};

    protected domConstructor: IDomConstructor;

    constructor(element: JQuery, options: IDataTableOptions = {}) {
        this.element = element;
        this.options = Object.assign({
            destroy: true,
            language: Object.assign(options.language || {}, this.constructor.LANG),
        }, options);

        this.toolbars = new Toolbars();
        this.buttons = new Buttons(this);
        this.header = new Header(this);
    }

    public get toolbar(): IToolbarConstructor {
        return new ToolbarConstructor(this);
    }

    public get ajax(): IAjax {
        return new Ajax(this);
    }

    public isInited(): boolean {
        return !!(this as any).inited;
    }

    public column(data?: IColumnOptions): IColumns {
        return new Columns(data, this);
    }

    /**
     * Define columns
     *
     * @param datas
     *
     * @return {DataTable}
     */
    public columns(datas: IColumnOptions[] = []): IDataTable {
        const columns = new Columns(null, this);

        datas.forEach((data) => columns.and(data));

        return columns.add();
    }

    public set(options: IDataTableOptions): IDataTable {
        this.options = Object.assign(this.options, options);

        return this;
    }

    public init(): IDataTable {
        if (this.isInited()) {
            console.warn('Data table already inited');

            return this;
        }

        const buttons = (this.options.buttons || []).concat(this.buttons.get());

        this.options.buttons = buttons.length ? buttons : undefined;

        if (!this.options.dom) {
            this.domConstructor = new DomConstructor(this.options, this.toolbars);
            this.options.dom = this.domConstructor.get();
        }

        const api = (this.element.dataTable as any)(Object.assign({}, this.options)).api();

        Define.property(this, 'api', api).readonly().var();

        this.toolbars.replaceAllIn((this.api as any).table().container());
        this.header.apply();

        Define.property(this, 'inited', true).readonly().var();

        return this;
    }

    public destroy(): IDataTable {
        if (!this.isInited()) {
            return this;
        }

        this.api.destroy();

        delete this.api;
        delete (this as any).inited;

        return this;
    }

    public order(column: number, order: CONSTANT_ORDER): IDataTable {
        this.set({
            order: [[column, order]],
        });

        return this;
    }

    public language(value: IDataTableLanguage): IDataTable {
        return this.set({
            language: Object.assign(this.options.language, value),
        });
    }

    public data(value: any[]): IDataTable {
        if (this.api) {
            this.api.rows().remove();
            this.api.rows.add(value);
            this.api.draw();
        }

        return this.set({ data: value });
    }

    public on(name: string, ...args: any[]): IDataTable {
        this.element.on(name as any, args[0], args[1], args[2]);

        return this;
    }

    public paging(value: boolean): IDataTable {
        return this.set({ paging: value });
    }

    public searching(value: boolean): IDataTable {
        return this.set({ searching: value });
    }

    public info(value: boolean): IDataTable {
        return this.set({ info: value });
    }

    public autoWidth(value: boolean): IDataTable {
        return this.set({ autoWidth: value });
    }

    public lengthChange(value: boolean): IDataTable {
        return this.set({ lengthChange: value });
    }

    public processing(value: boolean): IDataTable {
        return this.set({ processing: value });
    }

    public ordering(value: boolean): IDataTable {
        return this.set({ ordering: value });
    }

    public pageLength(value: number): IDataTable {
        return this.set({ pageLength: value });
    }

    public startFrom(value: number): IDataTable {
        return this.set({ displayStart: value });
    }

    public columnDefs(value: any): IDataTable {
        return this.set({ columnDefs: value });
    }
}
