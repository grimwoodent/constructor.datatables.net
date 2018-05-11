"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = require("jquery");
const blocks_js_1 = require("./../../constant/blocks.js");
const toolbar_js_1 = require("./toolbar.js");
class Toolbars {
    constructor() {
        this.all = {};
    }
    add(position, element) {
        if (this.all[position]) {
            console.warn('Replace toolbar', this.all[position], 'by', element);
        }
        this.all[position] = element || null;
        return this;
    }
    getControl(alias) {
        const cKey = Object.keys(this.all).
            find(key => {
            const toolbar = this.all[key];
            return toolbar.isControl() && toolbar.isControl(alias);
        });
        return cKey ? this.all[cKey] : null;
    }
    getReplaceBlocks() {
        const result = {};
        Object.keys(this.all).
            forEach(key => {
            const toolbar = this.all[key];
            if (toolbar.isControl()) {
                result[toolbar.position] = toolbar.control;
            }
            else {
                result[toolbar.position] = `<'js-table-toolbar-${toolbar.position}'>`;
            }
        });
        return result;
    }
    replaceAllIn(element) {
        const $element = jquery_1.default(element);
        Object.keys(this.all).
            forEach(key => {
            const toolbar = this.all[key];
            const container = $element.find(`.js-table-toolbar-${toolbar.position}`);
            container.replaceWith(toolbar.element);
        });
        return this;
    }
}
exports.Toolbars = Toolbars;
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
        return this.set(blocks_js_1.BLOCKS_TEMPLATE_ALIAS[blocks_js_1.CONTROLS.PAGING]);
    }
    get searching() {
        this._table.set({ searching: true });
        return this.set(blocks_js_1.BLOCKS_TEMPLATE_ALIAS[blocks_js_1.CONTROLS.SEARCHING]);
    }
    get info() {
        this._table.set({ info: true });
        return this.set(blocks_js_1.BLOCKS_TEMPLATE_ALIAS[blocks_js_1.CONTROLS.INFO]);
    }
    get processing() {
        this._table.set({ processing: true });
        return this.set(blocks_js_1.BLOCKS_TEMPLATE_ALIAS[blocks_js_1.CONTROLS.PROCESSING]);
    }
    get lengthChange() {
        this._table.set({ lengthChange: true });
        return this.set(blocks_js_1.BLOCKS_TEMPLATE_ALIAS[blocks_js_1.CONTROLS.LENGTH_CHANGE]);
    }
}
class ToolbarConstructor {
    constructor(table) {
        this._editing = new toolbar_js_1.default();
        this._table = table;
    }
    get top() { this._editing.setPosition(blocks_js_1.POSITION.TOP, null, null); return this; }
    get bottom() { this._editing.setPosition(blocks_js_1.POSITION.BOTTOM, null, null); return this; }
    get left() { this._editing.setPosition(null, blocks_js_1.POSITION.LEFT, null); return this; }
    get middle() { this._editing.setPosition(null, blocks_js_1.POSITION.MIDDLE, null); return this; }
    get right() { this._editing.setPosition(null, blocks_js_1.POSITION.RIGHT, null); return this; }
    get beforeControl() { this._editing.setPosition(null, null, blocks_js_1.POSITION.BEFORE); return this; }
    get onControl() { this._editing.setPosition(null, null, blocks_js_1.POSITION.CENTER); return this; }
    get afterControl() { this._editing.setPosition(null, null, blocks_js_1.POSITION.AFTER); return this; }
    html(value) { this._editing.setTemplate(value); return this; }
    get control() { return new Control(this, this._table); }
    on(...args) { this._editing.addEvent(...args); return this; }
    get and() {
        this.add();
        return this;
    }
    add() {
        const element = this._editing.getElement();
        const position = this._editing.getPosition();
        this._table.toolbars.add(position, element);
        this._editing = new toolbar_js_1.default();
        return this._table;
    }
}
exports.ToolbarConstructor = ToolbarConstructor;
//# sourceMappingURL=main.js.map