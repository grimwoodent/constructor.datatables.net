"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
require("datatables.net");
require("datatables.net-bs");
require("datatables.net-buttons");
require("datatables.net-buttons-bs");
require("datatables.net-select");
require("datatables.net-select-bs/css/select.bootstrap.css");
const events_1 = require("./constant/events");
const order_1 = require("./constant/order");
const language_ru_1 = require("./constant/language.ru");
const columns_1 = require("./data-setter/columns");
const BaseDataTable = $.fn.dataTable;
// disable alerts
BaseDataTable.ext.errMode = 'throw';
exports.EVENT = events_1.default;
exports.ORDER = order_1.ORDER;
class DataTable {
    constructor(element, options = {}) {
        this.options = {};
        this.element = element;
        this.options = Object.assign({
            destroy: true,
            language: Object.assign(options.language || {}, language_ru_1.default),
        }, options);
        // @TODO Remove this stuff after init
        // this.toolbars = new Toolbars();
        // this.buttons = new Buttons(this);
        // this.header = new Header(this);
    }
    static create(element, options = {}) {
        return new this(element, options);
    }
    get toolbar() {
        return null;
        // return new ToolbarConstructor(this);
    }
    get ajax() {
        return null;
        // return new Ajax(this);
    }
    isInited() {
        return !!this.inited;
    }
    column(data) {
        return new columns_1.Columns(data, this);
    }
    /**
     * Define columns
     *
     * @param datas
     *
     * @return {DataTable}
     */
    columns(datas = []) {
        const columns = new columns_1.Columns(null, this);
        datas.forEach((data) => columns.and(data));
        return columns.add();
    }
    set(options) {
        return null;
    }
    init() {
        return null;
    }
    destroy() {
        return null;
    }
    order(column, order) {
        return null;
    }
    language(value) {
        return null;
    }
    data(value) {
        return null;
    }
    on(name, ...args) {
        return null;
    }
    paging(value) {
        return null;
    }
    searching(value) {
        return null;
    }
    info(value) {
        return null;
    }
    autoWidth(value) {
        return null;
    }
    lengthChange(value) {
        return null;
    }
    processing(value) {
        return null;
    }
    ordering(value) {
        return null;
    }
    pageLength(value) {
        return null;
    }
    startFrom(value) {
        return null;
    }
    columnDefs(value) {
        return null;
    }
}
DataTable.EVENT = exports.EVENT;
DataTable.ORDER = exports.ORDER;
exports.DataTable = DataTable;
//# sourceMappingURL=index.js.map