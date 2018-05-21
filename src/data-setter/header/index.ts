// const $ = require('jquery');
const $ = jQuery;
import { IHeadeData, IHeader } from './interface';
import { IDataTable } from '../../interface';

export class Header implements IHeader {
    protected table: IDataTable;

    protected headerData: IHeadeData;

    constructor(table: IDataTable) {
        this.table = table;
        this.headerData = {};
    }

    public add(columnIdx: any, data: IHeadeData): IDataTable {
        this.headerData[columnIdx] = data;

        return this.table;
    }

    public columns(idx: any): any {
        if (!this.table.api) {
            throw new Error('Table does not ready');
        }

        return (this.table.api.columns(idx) as any).header();
    }

    public column(idx: any): any {
        if (!this.table.api) {
            throw new Error('Table does not ready');
        }

        return (this.table.api.column(idx) as any).header();
    }

    public apply(): IDataTable {
        if (this.table.isInited()) {
            throw new Error('Table already inited');
        }

        Object.keys(this.headerData).forEach((idx: any) => {
            const data = this.headerData[idx];
            const element = this.column(idx);

            if (data.className) {
                $(element).addClass(data.className);
            }
        });

        return this.table;
    }
}
