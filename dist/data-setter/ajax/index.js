"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("./response");
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
        this.data.dataFilter = (data) => fn(this.createResponse(data), data);
        return this;
    }
    /**
     * Only inited load
     */
    loading(data = {}) {
        return this.table.set({
            ajax: Object.assign({}, this.data, data),
        });
    }
    /**
     * Always load from server (pagging and ather)
     */
    always(data = {}) {
        return this.table.set({
            serverSide: true,
            ajax: Object.assign({}, this.data, data),
        });
    }
    createResponse(data) {
        return new response_1.DataTableServerResponse(data);
    }
}
exports.Ajax = Ajax;
//# sourceMappingURL=index.js.map