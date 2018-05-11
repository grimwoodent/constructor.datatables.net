import $ = require('jquery');
import { ToolbarElement } from './toolbar-element';
import { IToolbar, IToolbarPosition, TToolbarTemplate } from './interface';
import { POSITION } from '../../constant/blocks';

export class Toolbar implements IToolbar {
    protected html: TToolbarTemplate = null;
    protected control: any = null;
    protected element: JQuery = null;
    protected position: IToolbarPosition = {};
    protected events: any = [];

    public setPosition(tb: POSITION, lr: POSITION, ba: POSITION): IToolbar {
        this.position = {
            tb: tb || this.position.tb || null,
            lr: lr || this.position.lr || null,
            ba: ba || this.position.ba || null,
        };

        return this;
    }

    public isControl(): boolean {
        return !!this.control;
    }

    public setControl(value: any): IToolbar {
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

    public addEvent(...args: any[]): IToolbar {
        this.events.push(args);

        return this;
    }

    public getPosition(): string {
        return `${this.position.tb || ''}${this.position.lr || ''}${this.position.ba || ''}`;
    }

    public getElement(): JQuery {
        if (this.element) {
            return this.element;
        }

        if (!this.isControl()) {
            const element = $(this.getTemplate());

            this.events.forEach((args) => element.on(...args));

            this.element = new ToolbarElement({
                element,
                position: this.getPosition(),
            });
        } else {
            this.element = new ToolbarElement({
                control: this.control,
                position: this.getPosition(),
            });
        }

        return this.element;
    }
}
