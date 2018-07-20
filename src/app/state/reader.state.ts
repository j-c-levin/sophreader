import { State, Selector, Action, StateContext } from '@ngxs/store';
import { UpdateFeeds, AddSource, UpdateSources } from 'src/app/actions/reader.actions';
import { FeedService } from '@services/feed.service';
import { switchMap, tap } from 'rxjs/operators';
import { SourceService } from '@services/source.service';

export class ReaderStateModel {
    feeds: IFeed[];
    sources: ISource[];
}

export interface ISource {
    name: string;
    url: string;
}

export interface IFeed {
    title: string;
    link: string;
    content: string;
}

@State<ReaderStateModel>({
    name: 'Reader',
    defaults: {
        feeds: [],
        sources: []
    }
})
export class ReaderState {
    constructor(
        private feedService: FeedService,
        private sourceService: SourceService
    ) { }

    @Selector()
    static getFeeds(state: ReaderStateModel): IFeed[] {
        return state.feeds;
    }

    @Selector()
    static getSources(state: ReaderStateModel): ISource[] {
        return state.sources;
    }

    @Action(UpdateFeeds)
    updateFeeds(ctx: StateContext<ReaderStateModel>, source: UpdateFeeds): void {
        this.feedService.getFeeds(source.feed.url)
            .pipe(
                tap(feeds => {
                    const state = ctx.getState();
                    ctx.setState({
                        ...state,
                        feeds
                    });
                }),
                switchMap(() => this.feedService.GetNewFeeds(source.feed.url))
            ).subscribe((feeds) => {
                const state = ctx.getState();
                ctx.setState({
                    ...state,
                    feeds
                });
            });
    }

    @Action(UpdateSources)
    updateSource(ctx: StateContext<ReaderStateModel>) {
        this.sourceService.getSources()
            .subscribe((sources) => {
                const state = ctx.getState();
                ctx.setState({
                    ...state,
                    sources
                });
            });
    }

    @Action(AddSource)
    addSource(ctx: StateContext<ReaderStateModel>, action: AddSource) {
        this.sourceService.addSource(action.newFeed)
            .subscribe((sources) => {
                const state = ctx.getState();
                ctx.setState({
                    ...state,
                    sources
                });
            });
    }
}
