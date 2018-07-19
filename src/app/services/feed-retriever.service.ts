import { Injectable } from '@angular/core';
import { Observable } from '@node_modules/rxjs';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Http } from '@angular/http';
import { switchMap, map, tap } from '@node_modules/rxjs/operators';
import { CdkColumnDefBase } from '../../../node_modules/@angular/cdk/table';

@Injectable({
  providedIn: 'root'
})
export class FeedRetrieverService {

  constructor(
    protected localStorage: LocalStorage,
    private http: Http
  ) { }

  getFeeds(feedUrl: string): Observable<any> {
    return this.localStorage.getItem(feedUrl);
  }

  GetNewFeeds(feedUrl: string): Observable<any> {
    const url = 'https://gl3jmhect5.execute-api.eu-west-1.amazonaws.com/latest';
    return this.http.get(url,
      {
        params: {
          feedUrl
        }
      }
    ).pipe(
      map(data => data.json()),
      map(data => data.items),
      switchMap(items => this.localStorage.setItem(feedUrl, items)),
      switchMap(() => this.getFeeds(feedUrl))
    );
  }
}
