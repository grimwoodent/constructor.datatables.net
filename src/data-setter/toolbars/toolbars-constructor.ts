import {
    POSITION,
} from '../../constant/blocks';
import { Toolbar } from './toolbar';
import { Control } from './control';
import { IDataTable, IToolbar } from './interface';

export class ToolbarConstructor {
    protected editing: IToolbar;

    protected table: IDataTable;

    constructor(table: IDataTable) {
        this.editing = new Toolbar();
        this.table = table;
    }

    get top() { this.editing.setPosition(POSITION.TOP, null, null); return this; }
    get bottom() { this.editing.setPosition(POSITION.BOTTOM, null, null); return this; }

    get left() { this.editing.setPosition(null, POSITION.LEFT, null); return this; }
    get middle() { this.editing.setPosition(null, POSITION.MIDDLE, null); return this; }
    get right() { this.editing.setPosition(null, POSITION.RIGHT, null); return this; }

    get beforeControl() { this.editing.setPosition(null, null, POSITION.BEFORE); return this; }
    get onControl() { this.editing.setPosition(null, null, POSITION.CENTER); return this; }
    get afterControl() { this.editing.setPosition(null, null, POSITION.AFTER); return this; }

    html(value) { this.editing.setTemplate(value); return this; }

    get control() { return new Control(this, this.table); }

    on(...args) { this.editing.addEvent(...args); return this; }

    get and() {
        this.add();
        return this;
    }

    add() {
        const element = this.editing.getElement();
        const position = this.editing.getPosition();

        this.table.toolbars.add(position, element);
        this.editing = new Toolbar();

        return this.table;
    }
}
