import { ISource } from 'src/app/state/reader.state';
export class UpdateFeeds {
    static readonly type = '[Feed] update feeds';
    constructor(public source: ISource) { }
}

export class UpdateSources {
    static readonly type = '[Source] update sources';
}

export class AddSource {
    static readonly type = '[Source] add feed';
    constructor(public newFeed: ISource) { }
}
