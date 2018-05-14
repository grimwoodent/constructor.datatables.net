import { IDataTable } from '../../interface';

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
