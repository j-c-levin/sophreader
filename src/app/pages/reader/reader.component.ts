import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ReaderState } from 'src/app/state/reader.state';
import { Observable } from 'rxjs';
import { UpdateFeeds, AddSource } from 'src/app/actions/reader.actions';
import { UpdateSources } from '../../actions/reader.actions';
import { ISource } from '../../state/reader.state';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  @Select(ReaderState.getFeeds) feeds$: Observable<any>;
  @Select(ReaderState.getSources) sources$: Observable<any>;
  @Select(ReaderState.getFeedsLoading) feedsLoading$: Observable<boolean>;

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
