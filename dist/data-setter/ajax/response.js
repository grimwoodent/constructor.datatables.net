"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    stringify() {
        return JSON.stringify(this.data);
    }
}
exports.DataTableServerResponse = DataTableServerResponse;
//# sourceMappingURL=response.js.map