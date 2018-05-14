import { POSITION } from '../../constant/blocks';
import { IDataTable } from '../../interface';

export interface IToolbarControl {
    set(value: string): IToolbarConstructor;

    paging: IToolbarConstructor;

    searching: IToolbarConstructor;

    info: IToolbarConstructor;

    processing: IToolbarConstructor;

    lengthChange: IToolbarConstructor;
}

export interface IToolbarElement {
    isElement(): boolean;

    isControl(value?: any): boolean;

    getControl(): string;

    getPosition(): string;

    getElement(): JQuery;
}

export interface IToolbarConstructor {
    top: IToolbarConstructor;
    bottom: IToolbarConstructor;

    left: IToolbarConstructor;
    middle: IToolbarConstructor;
    right: IToolbarConstructor;

    beforeControl: IToolbarConstructor;
    onControl: IToolbarConstructor;
    afterControl: IToolbarConstructor;

    control: IToolbarControl;

    and: IToolbarConstructor;

    html(value: TToolbarTemplate): IToolbarConstructor

    on(...args: any[]): IToolbarConstructor

    add(): IDataTable;

    getEditing(): IToolbar;
}

export interface IToolbars {
    add(position: string, element: IToolbarElement): IToolbars;

    getControl(alias: string): IToolbarElement;

    getReplaceBlocks(): { [key: string]: string };

    replaceAllIn(element: JQuery | HTMLElement): IToolbars;
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

    setControl(value: string): IToolbar;

    setTemplate(html: TToolbarTemplate): IToolbar;

    getTemplate(): string;

    getControl(): string;

    getPosition(): string;

    addEvent(...args: any[]): IToolbar;

    getElement(): IToolbarElement;
}
