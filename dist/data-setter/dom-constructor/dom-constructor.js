"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
// import Twig from 'twig';
const blocks_1 = require("../constant/blocks");
const toolbar_element_1 = require("./toolbars/toolbar-element");
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
                    toolbars.add(defaultPosition, new toolbar_element_1.default({
                        control: paramKey,
                        position: defaultPosition,
                    }));
                }
            }
        });
        this.positions = toolbars.getReplaceBlocks() || {};
    }
    get() {
        return null;
        // return domTemplate({
        //     p: this.positions,
        // });
    }
}
exports.DomConstructor = DomConstructor;
//# sourceMappingURL=dom-constructor.js.map