import { Injectable } from '@angular/core';
import { Observable } from '@node_modules/rxjs';
import { LocalStorage } from '@ngx-pwa/local-storage';
import * as fastXmlParser from 'fast-xml-parser';
import { Http } from '@angular/http';
import { switchMap, map } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedRetrieverService {

  constructor(
    protected localStorage: LocalStorage,
    private http: Http
  ) { }

  getFeeds(): Observable<any> {
    return this.localStorage.getItem('feeds');
  }

  UpdateCache(): Observable<any> {
    return this.http.get('https://kotaku.com/rss')
      .pipe(
        map(data => data.json()),
        switchMap((feedData) => {
          const jsonFeed = fastXmlParser.parse(feedData).rss.channel.item;
          return this.localStorage.setItem('feeds', jsonFeed);
        })
      );
  }
}
