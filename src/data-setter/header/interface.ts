import { IDataTable } from '../../interface';

export interface IHeadeData {
    [key: string]: any;
}

export interface IHeader {
    add(columnIdx: number, data: IHeadeData): IDataTable;

    columns(idx: any): any;

    column(idx: any): any;

    apply(): IDataTable;
}
