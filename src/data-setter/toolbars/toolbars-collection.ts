const $ = require('jquery');
import { IToolbarControl, IToolbarElement, IToolbars } from './interface';

export class Toolbars implements IToolbars {
    protected all: { [key: string]: IToolbarElement } = {};

    public add(position: string, element: IToolbarElement): IToolbars {
        if (this.all[position]) {
            console.warn('Replace toolbar', this.all[position], 'by', element);
        }

        this.all[position] = element || null;

        return this;
    }

    public getControl(alias: string): IToolbarElement {
        const cKey = Object
            .keys(this.all)
            .find(key => {
                const toolbar = this.all[key];

                return toolbar.isControl() && toolbar.isControl(alias);
            });

        return cKey ? this.all[cKey] : null;
    }

    public getReplaceBlocks(): { [key: string]: string } {
        const result: { [key: string]: string } = {};

        Object
            .keys(this.all)
            .forEach(key => {
                const toolbar = this.all[key];

                if (toolbar.isControl()) {
                    result[toolbar.getPosition()] = toolbar.getControl();
                } else {
                    result[toolbar.getPosition()] = `<'js-table-toolbar-${toolbar.getPosition()}'>`;
                }
            });

        return result;
    }

    public replaceAllIn(element: JQuery | HTMLElement): IToolbars {
        const $element = $(element);

        Object
            .keys(this.all)
            .forEach(key => {
                const toolbar = this.all[key];
                const container = $element.find(`.js-table-toolbar-${toolbar.getPosition()}`);

                container.replaceWith(toolbar.getElement());
            });

        return this;
    }
}
