import $ = require('jquery');
import { IColumnOptions, IColumns, IDataTable } from '../interface';

export class Columns implements IColumns {
    protected all: IColumnOptions[];

    protected table: IDataTable;

    constructor(column: IColumnOptions, table: IDataTable) {
        this.all = column ? [column] : [];
        this.table = table;
    }

    public and(data: IColumnOptions) {
        if (data) {
            this.all.push(data);
        }

        return this;
    }

    public index(data: IColumnOptions = {}) {
        const indexData: IColumnOptions = Object.assign({
            title: '№',
            searchable: false,
            orderable: false,
            data: null,
            render: (d: any, t: any, f: any, meta: any = {}) => {
                const row = meta.row || 0;
                const settings = meta.settings || {};
                const ajaxData = settings.oAjaxData || {};
                const page = (ajaxData.page || 1) - 1;
                const perPage = settings._iDisplayLength || 0;

                return page * perPage + row + 1;
            },
        }, data);

        this.all.push(indexData);

        return this;
    }

    public add(): IDataTable {
        const hideable: any[] = [];
        const toggleable: any[] = [];

        this.all = this.all.map((el, idx) => {
            const element: IColumnOptions = el;
            const createdCell = element.createdCell;

            element.createdCell = function cc(cell: any, cellData: any, rowData: any, rowIndex: any, colIndex: any) {
                const opts = element.cell || {};

                if (opts.className) {
                    $(cell).addClass(opts.className);
                }

                if (createdCell) {
                    createdCell.call(this, cell, cellData, rowData, rowIndex, colIndex);
                }
            };

            if (element.order) {
                this.table.order(idx, element.order);
            }

            if (element.hideable) {
                hideable.push(idx);
            }

            if (element.toggleable) {
                toggleable.push(idx);
            }

            if (element.header) {
                this.table.header.add(idx, element.header);
            }

            return element;
        });

        if (hideable.length) {
            this.table.buttons.columnVisible.setColumns(hideable).add();
        }

        if (toggleable.length) {
            this.table.buttons.columnToggle.setColumns(toggleable).add();
        }

        return this.table.set({
            columns: this.all,
        });
    }
}
