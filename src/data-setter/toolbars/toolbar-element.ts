export class ToolbarElement {
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
            return this.control === value;
        }

        return !!this.control;
    }
}
