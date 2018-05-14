"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blocks_1 = require("../../constant/blocks");
class Control {
    constructor(toolbar, table) {
        this.toolbar = toolbar;
        this.table = table;
    }
    set(value) {
        this.toolbar.getEditing().setControl(value);
        return this.toolbar;
    }
    get paging() {
        this.table.set({ paging: true });
        return this.set(blocks_1.BLOCKS_TEMPLATE_ALIAS[blocks_1.CONTROLS.PAGING]);
    }
    get searching() {
        this.table.set({ searching: true });
        return this.set(blocks_1.BLOCKS_TEMPLATE_ALIAS[blocks_1.CONTROLS.SEARCHING]);
    }
    get info() {
        this.table.set({ info: true });
        return this.set(blocks_1.BLOCKS_TEMPLATE_ALIAS[blocks_1.CONTROLS.INFO]);
    }
    get processing() {
        this.table.set({ processing: true });
        return this.set(blocks_1.BLOCKS_TEMPLATE_ALIAS[blocks_1.CONTROLS.PROCESSING]);
    }
    get lengthChange() {
        this.table.set({ lengthChange: true });
        return this.set(blocks_1.BLOCKS_TEMPLATE_ALIAS[blocks_1.CONTROLS.LENGTH_CHANGE]);
    }
}
exports.Control = Control;
//# sourceMappingURL=control.js.map