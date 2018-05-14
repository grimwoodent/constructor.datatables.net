export interface IDomConstructorPositions {
    [key: string]: any;
}

export interface IDomConstructorOptions extends DataTables.Settings {
    [key: string]: any;
}

export interface IDomConstructor {
    get(): string;
}
