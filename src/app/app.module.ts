import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from 'src/app/app.component';
import { ReaderComponent } from 'src/app/pages/reader/reader.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FeedListComponent } from 'src/app/components/feed-list/feed-list.component';
import { NgxsModule } from '@ngxs/store';
import { ReaderState } from 'src/app/state/reader.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { MatExpansionModule, MatListModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedService } from '@services/feed.service';
import { HttpModule } from '@angular/http';
import { SourceListComponent } from 'src/app/components/source-list/source-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SourceService } from '@services/source.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TitleWidthPipe } from './pipes/title-width.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReaderComponent,
    FeedListComponent,
    SourceListComponent,
    TitleWidthPipe
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
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    FeedService,
    SourceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
