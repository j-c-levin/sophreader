import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-source-list',
  templateUrl: './source-list.component.html',
  styleUrls: ['./source-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceListComponent {

  @Input() sources: any[];
  @Output() feedSelectEvent = new EventEmitter<any>();
  @Output() newFeedEvent = new EventEmitter<string>();
  newFeedUrl: string;

}
