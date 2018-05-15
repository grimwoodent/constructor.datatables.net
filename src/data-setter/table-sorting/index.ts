import $ = require('jquery');

export type TSortingFn = (...args: any[]) => any;

export interface ISortingSettings {
    name?: string;
    pre?: TSortingFn;
    asc?: TSortingFn;
    desc?: TSortingFn;
}

export class TableSorting {
    protected settings: ISortingSettings = {
        name: null,
        pre: null,
        asc: null,
        desc: null,
    };

    public static create(name: string) {
        return new TableSorting(name);
    }

    constructor(name: string) {
        this.settings.name = name;
    }

    public pre(fn: TSortingFn) {
        this.settings.pre = fn;

        return this;
    }

    public asc(fn: TSortingFn) {
        this.settings.asc = fn;

        return this;
    }

    public desc(fn: TSortingFn) {
        this.settings.desc = fn;

        return this;
    }

    public add() {
        if (!this.settings.name) {
            throw new Error('Sorting "name" required');
        }

        if (!this.settings.pre) {
            throw new Error('Sorting "pre" function required');
        }

        if (!this.settings.asc) {
            throw new Error('Sorting "asc" function required');
        }

        if (!this.settings.desc) {
            throw new Error('Sorting "desc" function required');
        }

        $.extend(($.fn as any).dataTableExt.oSort, {
            [`${this.settings.name}-pre`]: this.settings.pre,
            [`${this.settings.name}-asc`]: this.settings.asc,
            [`${this.settings.name}-desc`]: this.settings.desc,
        });
    }
}
