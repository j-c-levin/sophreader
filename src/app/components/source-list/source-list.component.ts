import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ISource } from '@state/reader.state';
import { IFeed } from '@state/reader.state';

@Component({
  selector: 'app-source-list',
  templateUrl: './source-list.component.html',
  styleUrls: ['./source-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceListComponent {

  @Input() sources: ISource[];
  @Input() selectedSource: ISource;
  @Output() feedSelectEvent = new EventEmitter<IFeed>();
  @Output() newFeedEvent = new EventEmitter<string>();
  newFeed: ISource = { name: '', url: '' };

  isSelected(source: ISource): string {
    return (source === this.selectedSource) ? 'bold' : 'normal';
  }

}
