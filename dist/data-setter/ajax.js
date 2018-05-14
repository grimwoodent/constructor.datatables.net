"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grim_lib_1 = require("grim.lib");
// Это обертка над ответом сервера, чтобы передавать общее количество страниц в плагин
class DataTableServerResponse {
    constructor(data) {
        try {
            this._data = JSON.parse(data);
        }
        catch (err) {
            console.error(err);
            this._data = {};
        }
    }
    data(value) {
        if (value === undefined) {
            return this._data;
        }
        this._data = value;
        return this;
    }
    get serverResponse() {
        return grim_lib_1.Define.property(this, 'serverResponse', new ServerResponse(this._data)).var();
    }
    error(value) {
        this._data.error = value;
        return this;
    }
    total(value) {
        this._data.recordsTotal = value;
        this._data.recordsFiltered = value;
        return this;
    }
    result(value, dataSrc = 'data') {
        this._data[dataSrc] = value;
        return this;
    }
    stringify() {
        return JSON.stringify(this._data);
    }
}
class Ajax {
    constructor(table) {
        this.data = {};
        this.table = table;
    }
    options(data = {}) {
        this.data = Object.assign(this.data, data);
        return this;
    }
    url(value) {
        this.data.url = value;
        return this;
    }
    params(value) {
        this.data.data = value;
        return this;
    }
    success(value) {
        this.data.dataSrc = value;
        return this;
    }
    filter(fn) {
        this.data.dataFilter = data => fn(new DataTableServerResponse(data), data);
        return this;
    }
    /**
     * Только первая загрузка с сервера
     */
    loading(data = {}) {
        return this.table.set({
            ajax: Object.assign({}, this.data, data),
        });
    }
    /**
     * Всегда загружать с сервера
     */
    always(data = {}) {
        return this.table.set({
            serverSide: true,
            ajax: Object.assign({}, this.data, data),
        });
    }
}
exports.default = Ajax;
//# sourceMappingURL=ajax.js.map