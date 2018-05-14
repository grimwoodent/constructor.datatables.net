import { IToolbarControl, IToolbarElement } from './interface';

export class ToolbarElement implements IToolbarElement {
    protected element: JQuery;

    /**
     * Control name or alias
     */
    protected control: string;

    /**
     * position of control element
     */
    protected position: string;

    constructor(data: {
        element?: JQuery;
        control?: string;
        position?: string;
    } = {}) {
        this.element = data.element;
        this.control = data.control;
        this.position = data.position;
    }

    public isElement(): boolean {
        return !!this.element;
    }

    public isControl(value?: any): boolean {
        if (value !== undefined) {
            return this.getControl() === value;
        }

        return !!this.getControl();
    }

    public getControl(): string {
        return this.control;
    }

    public getPosition(): string {
        return this.position;
    }

    public getElement(): JQuery {
        return this.element;
    }
}
