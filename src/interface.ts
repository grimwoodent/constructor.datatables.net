import { ORDER } from './constant/order';
import { IToolbarConstructor, IToolbars } from './data-setter/toolbars/interface';
import { IAjax } from './data-setter/ajax/interface';
import { IColumnOptions, IColumns } from './data-setter/columns/interface';
import { IButtons } from './data-setter/buttons/interface';
import { IHeader } from './data-setter/header/interface';

export interface IDataTableOptions extends DataTables.Settings {
    [key: string]: any;
}

export interface IDataTableLanguage extends DataTables.LanguageSettings {
    [key: string]: any;
}

export interface IConfiguratorConstructor {
    Toolbars?: any;

    Buttons?: any;

    Header?: any;

    Toolbar?: any;

    Ajax?: any;
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
