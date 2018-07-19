import { State, Selector, Action, StateContext } from '@ngxs/store';
import { UpdateFeeds } from '../actions/reader.actions';
import { FeedRetrieverService } from '../services/feed-retriever.service';
import { switchMap, tap } from 'rxjs/operators';

export class ReaderStateModel {
    feeds: any[];
    sources: any[];
}
@State<ReaderStateModel>({
    name: 'Reader',
    defaults: {
        feeds: [],
        sources: [
            {
                name: 'kotaku',
                url: 'https://kotaku.com/rss'
            },
            {
                name: 'tech rader',
                url: 'https://techradar.com/rss'
            },
            {
                name: 'bbc home',
                url: 'http://feeds.bbci.co.uk/news/rss.xml'
            }
        ]
    }
})
export class ReaderState {
    constructor(private feedRetrieverService: FeedRetrieverService) { }

    @Selector()
    static getFeeds(state: ReaderStateModel): any[] {
        return state.feeds;
    }

    @Selector()
    static getSources(state: ReaderStateModel): any[] {
        return state.sources;
    }

    @Action(UpdateFeeds)
    updateFeeds(ctx: StateContext<ReaderStateModel>, feed: any): void {
        this.feedRetrieverService.getFeeds(feed.feedUrl)
            .pipe(
                tap(feeds => {
                    const state = ctx.getState();
                    ctx.setState({
                        ...state,
                        feeds
                    });
                }),
                switchMap(() => this.feedRetrieverService.GetNewFeeds(feed.feedUrl))
            ).subscribe((feeds) => {
                const state = ctx.getState();
                ctx.setState({
                    ...state,
                    feeds: feeds
                });
            });
    }
}
