import { IDataTable } from '../../interface';

export type TAjaxDataSrc = string | ((data: any) => any[]);

export type TAjaxDataFilter = ((data: any) => any);

export interface IAjaxData {
    [key: string]: any;
}

export interface IAjaxOptions {
    url?: string;
    data?: IAjaxData;
    dataSrc?: TAjaxDataSrc;
    dataFilter?: TAjaxDataFilter;
    [key: string]: any;
}

export interface IAjax {
    options(data: IAjaxOptions): IAjax;

    url(value: string): IAjax;

    params(value: IAjaxData): IAjax;

    success(value: TAjaxDataSrc): IAjax;

    filter(fn: (...args: any[]) => any): IAjax;

    loading(data: IAjaxOptions): IDataTable;

    always(data: IAjaxOptions): IDataTable;
}
