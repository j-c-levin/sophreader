import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISource } from 'src/app/state/reader.state';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SourceService {
  readonly sourcesKey = 'sources';

  constructor(
    protected localStorage: LocalStorage,
  ) { }

  getSources(): Observable<ISource[]> {
    return this.localStorage.getItem(this.sourcesKey);
  }

  addSource(newSource: ISource): Observable<ISource[]> {
    return this.localStorage.getItem(this.sourcesKey)
      .pipe(
        switchMap((sources: ISource[]) => {
          if (sources === null) {
            sources = [];
          }
          console.log(newSource);
          sources.push(newSource);
          return this.localStorage.setItem(this.sourcesKey, sources);
        }),
        switchMap(() => this.localStorage.getItem(this.sourcesKey))
      );
  }
}
