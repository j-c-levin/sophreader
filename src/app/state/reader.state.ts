import { State, Selector, Action, StateContext } from '@ngxs/store';
import { UpdateFeeds, AddSource } from 'src/app/actions/reader.actions';
import { FeedService } from '@services/feed.service';
import { switchMap, tap } from 'rxjs/operators';

export class ReaderStateModel {
    feeds: any[];
    sources: ISource[];
}

export interface ISource {
    name: string;
    url: string;
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
    constructor(private feedRetrieverService: FeedService) { }

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
                    feeds
                });
            });
    }

    @Action(AddSource)
    AddSource(ctx: StateContext<ReaderStateModel>, source: any) {
        const state = ctx.getState();
        state.sources.push({
            name: source.name,
            url: source.url
        });
        ctx.setState({ ...state });
    }
}
