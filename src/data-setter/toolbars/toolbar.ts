import $ = require('jquery');
import { ToolbarElement } from './toolbar-element';
import { IToolbar, IToolbarControl, IToolbarElement, IToolbarPosition, TToolbarTemplate } from './interface';
import { POSITION } from '../../constant/blocks';

type TEvent = any[];

export class Toolbar implements IToolbar {
    protected html: TToolbarTemplate = null;
    protected control: string = null;
    protected element: IToolbarElement = null;
    protected position: IToolbarPosition = {};
    protected events: TEvent[] = [];

    public setPosition(tb: POSITION, lr: POSITION, ba: POSITION): IToolbar {
        this.position = {
            tb: tb || this.position.tb || null,
            lr: lr || this.position.lr || null,
            ba: ba || this.position.ba || null,
        };

        return this;
    }

    public isControl(): boolean {
        return !!this.getControl();
    }

    public getControl(): string {
        return this.control;
    }

    public setControl(value: string): IToolbar {
        this.control = value;

        return this;
    }

    public setTemplate(html: TToolbarTemplate): IToolbar {
        this.html = html;

        return this;
    }

    public getTemplate(): string {
        return (typeof(this.html) === 'function') ? this.html() : this.html;
    }

    public addEvent(...args: TEvent): IToolbar {
        this.events.push(args);

        return this;
    }

    public getPosition(): string {
        return `${this.position.tb || ''}${this.position.lr || ''}${this.position.ba || ''}`;
    }

    public getElement(): IToolbarElement {
        if (this.element) {
            return this.element;
        }

        if (!this.isControl()) {
            const element = $(this.getTemplate());

            this.events.forEach((args: TEvent) => {
                element.on(args[0], args[1], args[2], args[3])
            });

            this.element = new ToolbarElement({
                element,
                position: this.getPosition(),
            });
        } else {
            this.element = new ToolbarElement({
                control: this.getControl(),
                position: this.getPosition(),
            });
        }

        return this.element;
    }
}
