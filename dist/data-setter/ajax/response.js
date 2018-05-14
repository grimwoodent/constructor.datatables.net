"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Use for get total pages
class DataTableServerResponse {
    constructor(data) {
        try {
            this.data = JSON.parse(data);
        }
        catch (err) {
            console.error(err);
            this.data = {};
        }
    }
    getData() {
        return this.data;
    }
    setData(value) {
        this.data = value;
        return this;
    }
    // public error(value) {
    //     this.data.error = value;
    //
    //     return this;
    // }
    //
    // public total(value) {
    //     this._data.recordsTotal = value;
    //     this._data.recordsFiltered = value;
    //
    //     return this;
    // }
    //
    // public result(value, dataSrc = 'data') {
    //     this._data[dataSrc] = value;
    //
    //     return this;
    // }
    stringify() {
        return JSON.stringify(this.data);
    }
}
exports.DataTableServerResponse = DataTableServerResponse;
//# sourceMappingURL=response.js.map