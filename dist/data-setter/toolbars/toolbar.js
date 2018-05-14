"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
const toolbar_element_1 = require("./toolbar-element");
class Toolbar {
    constructor() {
        this.html = null;
        this.control = null;
        this.element = null;
        this.position = {};
        this.events = [];
    }
    setPosition(tb, lr, ba) {
        this.position = {
            tb: tb || this.position.tb || null,
            lr: lr || this.position.lr || null,
            ba: ba || this.position.ba || null,
        };
        return this;
    }
    isControl() {
        return !!this.getControl();
    }
    getControl() {
        return this.control;
    }
    setControl(value) {
        this.control = value;
        return this;
    }
    setTemplate(html) {
        this.html = html;
        return this;
    }
    getTemplate() {
        return (typeof (this.html) === 'function') ? this.html() : this.html;
    }
    addEvent(...args) {
        this.events.push(args);
        return this;
    }
    getPosition() {
        return `${this.position.tb || ''}${this.position.lr || ''}${this.position.ba || ''}`;
    }
    getElement() {
        if (this.element) {
            return this.element;
        }
        if (!this.isControl()) {
            const element = $(this.getTemplate());
            this.events.forEach((args) => {
                element.on(args[0], args[1], args[2], args[3]);
            });
            this.element = new toolbar_element_1.ToolbarElement({
                element,
                position: this.getPosition(),
            });
        }
        else {
            this.element = new toolbar_element_1.ToolbarElement({
                control: this.getControl(),
                position: this.getPosition(),
            });
        }
        return this.element;
    }
}
exports.Toolbar = Toolbar;
//# sourceMappingURL=toolbar.js.map