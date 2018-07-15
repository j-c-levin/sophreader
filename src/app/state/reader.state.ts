import { State, Selector, Action, StateContext } from '@ngxs/store';
import { UpdateFeeds } from '../actions/reader.actions';
import { FeedRetrieverService } from '../services/feed-retriever.service';

export class ReaderStateModel {
    feeds: any[];
}
@State<ReaderStateModel>({
    name: 'Reader',
    defaults: {
        feeds: []
    }
})
export class ReaderState {
    constructor(private feedRetrieverService: FeedRetrieverService) { }

    @Selector()
    static getFeeds(state: ReaderStateModel): any[] {
        return state.feeds;
    }

    @Action(UpdateFeeds)
    updateFeeds(ctx: StateContext<ReaderStateModel>): void {
        this.feedRetrieverService
            .getFeeds()
            .subscribe((feeds) => {
                const state = ctx.getState();
                ctx.setState({
                    ...state,
                    feeds: feeds
                });
            });
    }
}
