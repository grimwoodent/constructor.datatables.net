"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
class Columns {
    constructor(column, table) {
        this.all = column ? [column] : [];
        this.table = table;
    }
    and(data) {
        if (data) {
            this.all.push(data);
        }
        return this;
    }
    index(data = {}) {
        const indexData = Object.assign({
            title: '№',
            searchable: false,
            orderable: false,
            data: null,
            render: (d, t, f, meta = {}) => {
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
    add() {
        const hideable = [];
        const toggleable = [];
        this.all = this.all.map((el, idx) => {
            const element = el;
            const createdCell = element.createdCell;
            element.createdCell = function cc(cell, cellData, rowData, rowIndex, colIndex) {
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
exports.Columns = Columns;
//# sourceMappingURL=columns.js.map