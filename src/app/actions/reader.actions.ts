export class UpdateFeeds {
    static readonly type = '[Reader] update feeds';
    constructor(public feedUrl: string) { }
}