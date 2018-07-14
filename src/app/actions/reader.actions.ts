import { Reader } from '../state/reader.state';
export class ReadFeed {
    static readonly type = '[Reader] read';

    constructor(public payload: Reader) { }
}
