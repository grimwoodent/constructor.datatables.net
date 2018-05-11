"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./abstract");
class ColumnVisibleButton extends abstract_1.Button {
    constructor(manager) {
        super(manager);
        this.columns = [];
    }
    setColumns(value) {
        this.columns = value;
        return this;
    }
    get() {
        if (!this.columns || !this.columns.length) {
            return null;
        }
        return {
            extend: 'colvis',
            columns: this.columns,
        };
    }
}
exports.default = ColumnVisibleButton;
//# sourceMappingURL=column-visible.js.map