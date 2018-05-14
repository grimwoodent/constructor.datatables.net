import { Button } from './abstract';
import { IButtonForColumns, IButtons } from './interface';

export default class ColumnVisibleButton extends Button implements IButtonForColumns {
    protected columns: any[];

    constructor(manager: IButtons) {
        super(manager);
        this.columns = [];
    }

    public setColumns(value: any[]): IButtonForColumns {
        this.columns = value;

        return this;
    }

    public get(): any {
        if (!this.columns || !this.columns.length) {
            return null;
        }

        return {
            extend: 'colvis',
            columns: this.columns,
        };
    }
}
