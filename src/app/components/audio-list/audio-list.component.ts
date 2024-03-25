import {Component} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {MOCK_DATA} from "../../models/mock-data";
import {AudioItem} from "../../models/audio-item.model";
import {AUDIO_TABLE_COLUMNS} from "../../models/constants";

@Component({
  selector: 'app-audio-list',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './audio-list.component.html',
  styleUrl: './audio-list.component.scss'
})
export class AudioListComponent {
  protected selectedRowID = ''
  protected displayedColumns: string[] = AUDIO_TABLE_COLUMNS
  protected dataSource = MOCK_DATA;

  handleRowClick(row: AudioItem) {
    if (row.id === this.selectedRowID) {
      this.selectedRowID = '';
      return;
    }
    this.selectedRowID = row.id;
  }
}
