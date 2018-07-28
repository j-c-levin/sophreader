import { AddSource, UpdateFeeds, UpdateSources } from '@actions/reader.actions';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ISource, IFeed, ReaderState } from '@state/reader.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  @Select(ReaderState.getFeeds) feeds$: Observable<IFeed[]>;
  @Select(ReaderState.getSources) sources$: Observable<ISource[]>;
  @Select(ReaderState.getFeedsLoading) feedsLoading$: Observable<boolean>;
  @Select(ReaderState.getSelectedSource) selectedSource$: Observable<ISource>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new UpdateSources());
    this.sources$.subscribe((sources) => {
      if (sources !== null && sources.length > 0) {
        this.store.dispatch(new UpdateFeeds(sources[0]));
      }
    });
  }

  feedSelectHandler(source) {
    this.store.dispatch(new UpdateFeeds(source));
  }

  newFeedHandler(source: ISource) {
    this.store.dispatch(new AddSource(source));
  }
}
