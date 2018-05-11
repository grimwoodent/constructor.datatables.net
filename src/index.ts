import $ = require('jquery');
import 'datatables.net';
import 'datatables.net-bs';
import 'datatables.net-buttons';
import 'datatables.net-buttons-bs';
import 'datatables.net-select';
import 'datatables.net-select-bs/css/select.bootstrap.css';

import CONSTANT_EVENTS from './constant/events';
import { ORDER as CONSTANT_ORDER } from './constant/order';
import CONSTANT_LANG_RU from './constant/language.ru';
import { Columns } from './data-setter/columns';
import { Buttons } from './data-setter/buttons/index';

import {
    IAjax, IButtons, IColumnOptions, IColumns, IDataTable, IDataTableLanguage, IDataTableOptions, IHeader,
} from './interface';
import { IToolbarConstructor, IToolbars } from './data-setter/toolbars/interface';

const BaseDataTable = $.fn.dataTable;

// disable alerts
BaseDataTable.ext.errMode = 'throw';

export const EVENT = CONSTANT_EVENTS;

export const ORDER = CONSTANT_ORDER;

export class DataTable implements IDataTable {
    public static EVENT = EVENT;

    public static ORDER = ORDER;

    public static create(element: JQuery, options: IDataTableOptions = {}): DataTable {
        return new this(element, options);
    }

    public api: DataTables.Api;

    public toolbars: IToolbars;

    public buttons: IButtons;

    public header: IHeader;

    protected element: JQuery;

    protected options: IDataTableOptions = {};

    constructor(element: JQuery, options: IDataTableOptions = {}) {
        this.element = element;
        this.options = Object.assign({
            destroy: true,
            language: Object.assign(options.language || {}, CONSTANT_LANG_RU),
        }, options);

        // @TODO Remove this stuff after init
        // this.toolbars = new Toolbars();
        this.buttons = new Buttons(this);
        // this.header = new Header(this);
    }

    public get toolbar(): IToolbarConstructor {
        return null;
        // return new ToolbarConstructor(this);
    }

    public get ajax(): IAjax {
        return null;
        // return new Ajax(this);
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

    public set (options: IDataTableOptions): IDataTable {
        return null;
    }

    public init(): IDataTable {
        return null;
    }

    public destroy(): IDataTable {
        return null;
    }

    public order(column: number, order: CONSTANT_ORDER): IDataTable {
        return null;
    }

    public language(value: IDataTableLanguage): IDataTable {
        return null;
    }

    public data(value: any[]): IDataTable {
        return null;
    }

    public on(name: string, ...args: any[]): IDataTable {
        return null;
    }

    public paging(value: boolean): IDataTable {
        return null;
    }

    public searching(value: boolean): IDataTable {
        return null;
    }

    public info(value: boolean): IDataTable {
        return null;
    }

    public autoWidth(value: boolean): IDataTable {
        return null;
    }

    public lengthChange(value: boolean): IDataTable {
        return null;
    }

    public processing(value: boolean): IDataTable {
        return null;
    }

    public ordering(value: boolean): IDataTable {
        return null;
    }

    public pageLength(value: number): IDataTable {
        return null;
    }

    public startFrom(value: number): IDataTable {
        return null;
    }

    public columnDefs(value: any): IDataTable {
        return null;
    }
}
