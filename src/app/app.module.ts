import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReaderComponent } from './pages/reader/reader.component';
import { AppRoutingModule } from './app-routing.module';
import { FeedListComponent } from './components/feed-list/feed-list.component';
import { NgxsModule } from '@ngxs/store';
import { ReaderState } from './state/reader.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { MatExpansionModule, MatListModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedRetrieverService } from '@services/feed-retriever.service';
import { HttpModule } from 'node_modules/@angular/http';
import { SourceListComponent } from './components/source-list/source-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ReaderComponent,
    FeedListComponent,
    SourceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      ReaderState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpModule,
    FormsModule
  ],
  providers: [FeedRetrieverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
