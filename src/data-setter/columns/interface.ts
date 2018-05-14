import { IDataTable } from '../../interface';

export interface IColumnOptions extends DataTables.ColumnSettings {
    [key: string]: any;
}

export interface IColumns {
    and(data: IColumnOptions): IColumns;

    index(data: IColumnOptions): IColumns;

    add(): IDataTable;
}
