"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
class TableSorting {
    constructor(name) {
        this.settings = {
            name: null,
            pre: null,
            asc: null,
            desc: null,
        };
        this.settings.name = name;
    }
    static create(name) {
        return new TableSorting(name);
    }
    pre(fn) {
        this.settings.pre = fn;
        return this;
    }
    asc(fn) {
        this.settings.asc = fn;
        return this;
    }
    desc(fn) {
        this.settings.desc = fn;
        return this;
    }
    add() {
        if (!this.settings.name) {
            throw new Error('Sorting "name" required');
        }
        if (!this.settings.pre) {
            throw new Error('Sorting "pre" function required');
        }
        if (!this.settings.asc) {
            throw new Error('Sorting "asc" function required');
        }
        if (!this.settings.desc) {
            throw new Error('Sorting "desc" function required');
        }
        $.extend($.fn.dataTableExt.oSort, {
            [`${this.settings.name}-pre`]: this.settings.pre,
            [`${this.settings.name}-asc`]: this.settings.asc,
            [`${this.settings.name}-desc`]: this.settings.desc,
        });
    }
}
exports.TableSorting = TableSorting;
//# sourceMappingURL=index.js.map