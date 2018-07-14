import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReaderComponent } from './pages/reader/reader.component';
import { AppRoutingModule } from './app-routing.module';
import { FeedListComponent } from './components/feed-list/feed-list.component';
import { NgxsModule } from '@ngxs/store';
import { ReaderState } from './state/reader.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { FeedItemComponent } from './components/feed-item/feed-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ReaderComponent,
    FeedListComponent,
    FeedItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      ReaderState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
