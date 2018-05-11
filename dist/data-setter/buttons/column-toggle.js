"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_1 = require("./abstract");
class ColumnToggleButton extends abstract_1.Button {
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
            extend: 'columnsToggle',
            columns: this.columns,
        };
    }
}
exports.default = ColumnToggleButton;
//# sourceMappingURL=column-toggle.js.map