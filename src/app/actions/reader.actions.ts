export class UpdateFeeds {
    static readonly type = '[Feed] update feeds';
    constructor(public feedUrl: string) { }
}

export class AddSource {
    static readonly type = '[Source] add feed';
    constructor(public feedUrl: string) { }
}
