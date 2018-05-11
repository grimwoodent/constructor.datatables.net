"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
class Header {
    constructor(table) {
        this.table = table;
        this.headerData = {};
    }
    add(columnIdx, data) {
        this.headerData[columnIdx] = data;
        return this.table;
    }
    columns(idx) {
        if (!this.table.api) {
            throw new Error('Table does not ready');
        }
        return this.table.api.columns(idx).header();
    }
    column(idx) {
        if (!this.table.api) {
            throw new Error('Table does not ready');
        }
        return this.table.api.column(idx).header();
    }
    apply() {
        if (this.table.isInited()) {
            throw new Error('Table already inited');
        }
        Object.keys(this.headerData).forEach((idx) => {
            const data = this.headerData[idx];
            const element = this.column(idx);
            if (data.className) {
                $(element).addClass(data.className);
            }
        });
        return this.table;
    }
}
exports.Header = Header;
//# sourceMappingURL=index.js.map