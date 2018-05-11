"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Button {
    constructor(manager) {
        this.manager = manager;
    }
    add() {
        return this.manager.add(this.get());
    }
    get() {
        return null;
    }
}
exports.Button = Button;
//# sourceMappingURL=abstract.js.map