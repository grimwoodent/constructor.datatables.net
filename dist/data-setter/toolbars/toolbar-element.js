"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ToolbarElement {
    constructor(data = {}) {
        this.element = data.element;
        this.control = data.control;
        this.position = data.position;
    }
    isElement() {
        return !!this.element;
    }
    isControl(value) {
        if (value !== undefined) {
            return this.getControl() === value;
        }
        return !!this.getControl();
    }
    getControl() {
        return this.control;
    }
    getPosition() {
        return this.position;
    }
    getElement() {
        return this.element;
    }
}
exports.ToolbarElement = ToolbarElement;
//# sourceMappingURL=toolbar-element.js.map