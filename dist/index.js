"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
const grim_lib_1 = require("grim.lib");
require("datatables.net");
require("datatables.net-bs");
require("datatables.net-buttons");
require("datatables.net-buttons-bs");
require("datatables.net-select");
require("datatables.net-select-bs/css/select.bootstrap.css");
const language_ru_1 = require("./constant/language.ru");
const events_1 = require("./constant/events");
const order_1 = require("./constant/order");
const columns_1 = require("./data-setter/columns");
const index_1 = require("./data-setter/buttons/index");
const toolbars_collection_1 = require("./data-setter/toolbars/toolbars-collection");
const toolbars_constructor_1 = require("./data-setter/toolbars/toolbars-constructor");
const index_2 = require("./data-setter/header/index");
const index_3 = require("./data-setter/ajax/index");
const index_4 = require("./data-setter/dom-constructor/index");
const BaseDataTable = $.fn.dataTable;
// disable alerts
BaseDataTable.ext.errMode = ((settings, tn, msg) => {
    console.error('DataTable error for settings', settings);
    throw new Error(msg);
});
exports.EVENT = events_1.EVENTS;
exports.ORDER = order_1.ORDER;
exports.LANG = language_ru_1.CONSTANT_LANG_RU;
class DataTable {
    constructor(element, options = {}) {
        this.options = {};
        this.element = element;
        this.options = Object.assign({
            destroy: true,
            language: Object.assign(options.language || {}, this.constructor.LANG),
        }, options);
        this.toolbars = new toolbars_collection_1.Toolbars();
        this.buttons = new index_1.Buttons(this);
        this.header = new index_2.Header(this);
    }
    static create(element, options = {}) {
        return new DataTable(element, options);
    }
    get toolbar() {
        return new toolbars_constructor_1.ToolbarConstructor(this);
    }
    get ajax() {
        return new index_3.Ajax(this);
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
        this.options = Object.assign(this.options, options);
        return this;
    }
    init() {
        if (this.isInited()) {
            console.warn('Data table already inited');
            return this;
        }
        const buttons = (this.options.buttons || []).concat(this.buttons.get());
        this.options.buttons = buttons.length ? buttons : undefined;
        if (!this.options.dom) {
            this.domConstructor = new index_4.DomConstructor(this.options, this.toolbars);
            this.options.dom = this.domConstructor.get();
        }
        const dataTable = this.element.dataTable(Object.assign({}, this.options));
        const api = dataTable.api();
        grim_lib_1.Define.property(this, 'api', api).readonly().var();
        this.toolbars.replaceAllIn(this.api.table().container());
        this.header.apply();
        grim_lib_1.Define.property(this, 'inited', true).readonly().var();
        return this;
    }
    destroy() {
        if (!this.isInited()) {
            return this;
        }
        this.api.destroy();
        delete this.api;
        delete this.inited;
        return this;
    }
    order(column, order) {
        this.set({
            order: [[column, order]],
        });
        return this;
    }
    language(value) {
        return this.set({
            language: Object.assign(this.options.language, value),
        });
    }
    data(value) {
        if (this.api) {
            this.api.rows().remove();
            this.api.rows.add(value);
            this.api.draw();
        }
        return this.set({ data: value });
    }
    on(name, ...args) {
        this.element.on(name, args[0], args[1], args[2]);
        return this;
    }
    paging(value) {
        return this.set({ paging: value });
    }
    searching(value) {
        return this.set({ searching: value });
    }
    info(value) {
        return this.set({ info: value });
    }
    autoWidth(value) {
        return this.set({ autoWidth: value });
    }
    lengthChange(value) {
        return this.set({ lengthChange: value });
    }
    processing(value) {
        return this.set({ processing: value });
    }
    ordering(value) {
        return this.set({ ordering: value });
    }
    pageLength(value) {
        return this.set({ pageLength: value });
    }
    startFrom(value) {
        return this.set({ displayStart: value });
    }
    columnDefs(value) {
        return this.set({ columnDefs: value });
    }
}
DataTable.EVENT = exports.EVENT;
DataTable.ORDER = exports.ORDER;
DataTable.LANG = exports.LANG;
exports.DataTable = DataTable;
//# sourceMappingURL=index.js.map