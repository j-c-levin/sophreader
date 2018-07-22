import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Http } from '@angular/http';
import { switchMap, map, tap } from 'rxjs/operators';
import { CdkColumnDefBase } from '@angular/cdk/table';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    protected localStorage: LocalStorage,
    private http: Http
  ) { }

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
      map(data => data.items)
    );
  }
}
