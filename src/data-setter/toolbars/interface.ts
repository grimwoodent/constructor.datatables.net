import { POSITION } from '../../constant/blocks';

export interface IToolbarConstructor {

}

export interface IToolbars {

}

export type TToolbarTemplateFn = (...args: any[]) => string;

export type TToolbarTemplate = string | TToolbarTemplateFn;

export interface IToolbarPosition {
    tb?: POSITION;
    lr?: POSITION;
    ba?: POSITION;
}

export interface IToolbar {
    setPosition(tb: POSITION, lr: POSITION, ba: POSITION): IToolbar;

    isControl(): boolean;

    setControl(value: any): IToolbar;

    setTemplate(html: TToolbarTemplate): IToolbar;

    getTemplate(): string;

    getPosition(): string;

    addEvent(...args: any[]): IToolbar;

    getElement(): JQuery;
}
