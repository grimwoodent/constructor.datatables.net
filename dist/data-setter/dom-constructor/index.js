"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
const blocks_1 = require("../../constant/blocks");
const toolbar_element_1 = require("./../toolbars/toolbar-element");
const template_1 = require("./template");
class DomConstructor {
    constructor(options = {}, toolbars) {
        this.positions = {};
        const defaultsVars = $.fn.dataTable.defaults;
        Object.keys(blocks_1.BLOCKS_TEMPLATE_ALIAS).
            forEach(key => {
            const defaultKey = blocks_1.DEFAULTS_BLOCKS_NAMES[key];
            const paramKey = blocks_1.BLOCKS_TEMPLATE_ALIAS[key];
            const defaultsValue = defaultsVars[defaultKey];
            const keyValue = options[key] !== undefined ? options[key] : defaultsValue;
            if (keyValue) {
                const toolbar = toolbars.getControl(blocks_1.BLOCKS_TEMPLATE_ALIAS[key]);
                const defaultPosition = blocks_1.DEFAULT_BLOCK_POSITION_BY_ALIAS[paramKey];
                if (!toolbar) {
                    toolbars.add(defaultPosition, new toolbar_element_1.ToolbarElement({
                        control: paramKey,
                        position: defaultPosition,
                    }));
                }
            }
        });
        this.positions = toolbars.getReplaceBlocks() || {};
    }
    get() {
        return template_1.domTemplate({
            p: this.positions,
        });
    }
}
exports.DomConstructor = DomConstructor;
//# sourceMappingURL=index.js.map