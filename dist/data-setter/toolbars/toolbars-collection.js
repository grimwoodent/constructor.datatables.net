"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
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
        const $element = $(element);
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
//# sourceMappingURL=toolbars-collection.js.map