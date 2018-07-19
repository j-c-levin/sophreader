import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ReaderState } from '../../state/reader.state';
import { Observable } from '@node_modules/rxjs';
import { UpdateFeeds } from '../../actions/reader.actions';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  @Select(ReaderState.getFeeds) feeds$: Observable<any>;
  @Select(ReaderState.getSources) sources$: Observable<any>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.sources$.subscribe((feeds) => {
      this.store.dispatch(new UpdateFeeds(feeds[0].url));
    });
  }

  feedSelectHandler(source) {
    this.store.dispatch(new UpdateFeeds(source.url));
  }
}
