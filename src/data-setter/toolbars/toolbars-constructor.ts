import {
    POSITION,
} from '../../constant/blocks';
import { Toolbar } from './toolbar';
import { Control } from './control';
import { IToolbar, IToolbarConstructor, IToolbarControl, TToolbarTemplate } from './interface';
import { IDataTable } from '../../interface';

export class ToolbarConstructor implements IToolbarConstructor {
    protected editing: IToolbar;

    protected table: IDataTable;

    constructor(table: IDataTable) {
        this.editing = new Toolbar();
        this.table = table;
    }

    public get top(): IToolbarConstructor {
        this.editing.setPosition(POSITION.TOP, null, null);

        return this;
    }

    public get bottom(): IToolbarConstructor {
        this.editing.setPosition(POSITION.BOTTOM, null, null);

        return this;
    }

    public get left(): IToolbarConstructor {
        this.editing.setPosition(null, POSITION.LEFT, null);

        return this;
    }

    public get middle(): IToolbarConstructor {
        this.editing.setPosition(null, POSITION.MIDDLE, null);

        return this;
    }

    public get right(): IToolbarConstructor {
        this.editing.setPosition(null, POSITION.RIGHT, null);

        return this;
    }

    public get beforeControl(): IToolbarConstructor {
        this.editing.setPosition(null, null, POSITION.BEFORE);

        return this;
    }

    public get onControl(): IToolbarConstructor {
        this.editing.setPosition(null, null, POSITION.CENTER);

        return this;
    }

    public get afterControl(): IToolbarConstructor {
        this.editing.setPosition(null, null, POSITION.AFTER);

        return this;
    }

    public get control(): IToolbarControl {
        return new Control(this, this.table);
    }

    public get and(): IToolbarConstructor {
        this.add();

        return this;
    }

    public html(value: TToolbarTemplate): IToolbarConstructor {
        this.editing.setTemplate(value);

        return this;
    }

    public on(...args: any[]): IToolbarConstructor {
        this.editing.addEvent(...args);

        return this;
    }

    public add(): IDataTable {
        const element = this.editing.getElement();
        const position = this.editing.getPosition();

        this.table.toolbars.add(position, element);
        this.editing = new Toolbar();

        return this.table;
    }

    public getEditing(): IToolbar {
        return this.editing;
    }
}
