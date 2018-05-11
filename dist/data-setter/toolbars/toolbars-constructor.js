"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blocks_1 = require("../../constant/blocks");
const toolbar_1 = require("./toolbar");
const control_1 = require("./control");
class ToolbarConstructor {
    constructor(table) {
        this.editing = new toolbar_1.Toolbar();
        this.table = table;
    }
    get top() { this.editing.setPosition(blocks_1.POSITION.TOP, null, null); return this; }
    get bottom() { this.editing.setPosition(blocks_1.POSITION.BOTTOM, null, null); return this; }
    get left() { this.editing.setPosition(null, blocks_1.POSITION.LEFT, null); return this; }
    get middle() { this.editing.setPosition(null, blocks_1.POSITION.MIDDLE, null); return this; }
    get right() { this.editing.setPosition(null, blocks_1.POSITION.RIGHT, null); return this; }
    get beforeControl() { this.editing.setPosition(null, null, blocks_1.POSITION.BEFORE); return this; }
    get onControl() { this.editing.setPosition(null, null, blocks_1.POSITION.CENTER); return this; }
    get afterControl() { this.editing.setPosition(null, null, blocks_1.POSITION.AFTER); return this; }
    html(value) { this.editing.setTemplate(value); return this; }
    get control() { return new control_1.Control(this, this.table); }
    on(...args) { this.editing.addEvent(...args); return this; }
    get and() {
        this.add();
        return this;
    }
    add() {
        const element = this.editing.getElement();
        const position = this.editing.getPosition();
        this.table.toolbars.add(position, element);
        this.editing = new toolbar_1.Toolbar();
        return this.table;
    }
}
exports.ToolbarConstructor = ToolbarConstructor;
//# sourceMappingURL=toolbars-constructor.js.map