import { State, Selector, Action, StateContext } from '@ngxs/store';
import { UpdateFeeds, AddSource, UpdateSources } from 'src/app/actions/reader.actions';
import { FeedService } from '@services/feed.service';
import { switchMap, tap } from 'rxjs/operators';
import { SourceService } from '@services/source.service';

export interface ISource {
    name: string;
    url: string;
}

export interface IFeed {
    title: string;
    link: string;
    content: string;
}

export class ReaderStateModel {
    feeds: IFeed[];
    sources: ISource[];
    feedsLoading: boolean;
    selectedSource: ISource;
}

@State<ReaderStateModel>({
    name: 'Reader',
    defaults: {
        feeds: [],
        sources: [],
        feedsLoading: false,
        selectedSource: null
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

    @Selector()
    static getFeedsLoading(state: ReaderStateModel): boolean {
        return state.feedsLoading;
    }

    @Selector()
    static getSelectedSource(state: ReaderStateModel): ISource {
        return state.selectedSource;
    }

    @Action(UpdateFeeds)
    updateFeeds(ctx: StateContext<ReaderStateModel>, updateFeeds: UpdateFeeds): void {
        let state = ctx.getState();
        // Set feeds loading to true and update the selected source
        ctx.setState({
            ...state,
            feeds: [],
            feedsLoading: true,
            selectedSource: updateFeeds.source
        });
        this.feedService.GetNewFeeds(updateFeeds.source.url).subscribe((feeds) => {
            state = ctx.getState();
            // Prevent loading feeds if source has changed
            if (state.selectedSource === updateFeeds.source) {
                ctx.setState({
                    ...state,
                    feeds,
                    feedsLoading: false
                });
            }
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
