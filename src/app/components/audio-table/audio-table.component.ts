import {Component, input, output} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {AudioItem} from "../../models/audio-item.model";

@Component({
  selector: 'app-audio-table',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './audio-table.component.html',
  styleUrl: './audio-table.component.scss'
})
export class AudioTableComponent {
  displayedColumns = input.required<string[]>();
  dataSource = input.required<AudioItem[]>();
  selectedRowID = input.required<string>()

  rowClick = output<AudioItem>()

  onRowClick(row: AudioItem) {
    this.rowClick.emit(row)
  }
}
