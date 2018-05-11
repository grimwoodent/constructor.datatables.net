"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blocks_1 = require("../../constant/blocks");
class Control {
    constructor(toolbar, table) {
        this.toolbar = toolbar;
        this._table = table;
    }
    set(value) {
        this.toolbar._editing.setControl(value);
        return this.toolbar;
    }
    get paging() {
        this._table.set({ paging: true });
        return this.set(blocks_1.BLOCKS_TEMPLATE_ALIAS[blocks_1.CONTROLS.PAGING]);
    }
    get searching() {
        this._table.set({ searching: true });
        return this.set(blocks_1.BLOCKS_TEMPLATE_ALIAS[blocks_1.CONTROLS.SEARCHING]);
    }
    get info() {
        this._table.set({ info: true });
        return this.set(blocks_1.BLOCKS_TEMPLATE_ALIAS[blocks_1.CONTROLS.INFO]);
    }
    get processing() {
        this._table.set({ processing: true });
        return this.set(blocks_1.BLOCKS_TEMPLATE_ALIAS[blocks_1.CONTROLS.PROCESSING]);
    }
    get lengthChange() {
        this._table.set({ lengthChange: true });
        return this.set(blocks_1.BLOCKS_TEMPLATE_ALIAS[blocks_1.CONTROLS.LENGTH_CHANGE]);
    }
}
exports.Control = Control;
//# sourceMappingURL=control.js.map