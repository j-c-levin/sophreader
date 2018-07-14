export class ReadFeed {
    static readonly type = '[Reader] read';

    constructor(public payload: any) { }
}
