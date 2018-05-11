"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("datatables.net-buttons");
require("datatables.net-buttons/js/buttons.colVis");
require("datatables.net-buttons-bs");
const column_visible_1 = require("./column-visible");
const column_toggle_1 = require("./column-toggle");
class Buttons {
    constructor(table) {
        this.table = table;
        this.buttons = [];
    }
    get columnVisible() {
        return new column_visible_1.default(this);
    }
    get columnToggle() {
        return new column_toggle_1.default(this);
    }
    add(value) {
        if (value) {
            this.buttons.push(value);
        }
        return this.table;
    }
    get() {
        return this.buttons;
    }
}
exports.Buttons = Buttons;
//# sourceMappingURL=index.js.map