import { ORDER } from './constant/order';
import { IToolbarConstructor, IToolbars } from './data-setter/toolbars/interface';

export interface IColumnOptions {
    [key: string]: any;
}

export interface IColumns {

}

export interface IButton {
    add(): IDataTable;

    get(): any;
}

export interface IButtonForColumns extends IButton {
    setColumns(value: any[]): IButtonForColumns;
}

export interface IButtons {
    columnVisible: IButtonForColumns;

    columnToggle: IButtonForColumns;

    add(value: IButton): IDataTable;

    get(): IButton[];
}

export interface IHeadeData {
    [key: string]: any;
}

export interface IHeader {
    add(columnIdx: number, data: IHeadeData): IDataTable;

    columns(idx: any): any;

    column(idx: any): any;

    apply(): IDataTable;
}

export interface IAjax {

}

export interface IDataTableOptions {
    [key: string]: any;
}

export interface IDataTableLanguage {
    [key: string]: any;
}

export interface IDataTable {
    api: DataTables.Api;

    toolbars: IToolbars;

    buttons: IButtons;

    header: IHeader;

    toolbar: IToolbarConstructor;

    ajax: IAjax;

    isInited(): boolean;

    set(options: IDataTableOptions): IDataTable;

    init(): IDataTable;

    destroy(): IDataTable;

    column(data?: IColumnOptions): IColumns;

    columns(datas: IColumnOptions[]): IDataTable;

    order(column: number, order: ORDER): IDataTable;

    language(value: IDataTableLanguage): IDataTable;

    data(value: any[]): IDataTable;

    on(name: string, ...args: any[]): IDataTable;

    paging(value: boolean): IDataTable;

    searching(value: boolean): IDataTable;

    info(value: boolean): IDataTable;

    autoWidth(value: boolean): IDataTable;

    lengthChange(value: boolean): IDataTable;

    processing(value: boolean): IDataTable;

    ordering(value: boolean): IDataTable;

    pageLength(value: number): IDataTable;

    startFrom(value: number): IDataTable;

    columnDefs(value: any): IDataTable;
}
