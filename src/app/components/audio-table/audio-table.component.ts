import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AudioItem} from "../../models/audio-item.model";

@Component({
  selector: 'app-audio-table',
  templateUrl: './audio-table.component.html',
  styleUrls: ['./audio-table.component.scss']
})
export class AudioTableComponent {
  @Input() displayedColumns!: string[];
  @Input() dataSource!: AudioItem[];
  @Input() selectedRowID!: string;

  @Output() rowClick = new EventEmitter<AudioItem>()

  onRowClick(row: AudioItem) {
    this.rowClick.emit(row)
  }
}
