import {Component, computed, inject, signal} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {AudioItem} from "../../models/audio-item.model";
import {AUDIO_TABLE_COLUMNS} from "../../models/constants";
import {AudioStoreService} from "../../services/audio-store.service";
import {AudioPlayerComponent} from "../audio-player/audio-player.component";

@Component({
  selector: 'app-audio-list',
  standalone: true,
  imports: [
    MatTableModule,
    AudioPlayerComponent
  ],
  templateUrl: './audio-list.component.html',
  styleUrl: './audio-list.component.scss'
})
export class AudioListComponent {
  selectedRowID = signal('');
  displayedColumns: string[] = AUDIO_TABLE_COLUMNS
  private store = inject(AudioStoreService).store
  dataSource = this.store();

  selectedItem = computed(() => {
    return this.store().find(item => item.id === this.selectedRowID())
  })


  handleRowClick(row: AudioItem) {
    if (row.id === this.selectedRowID()) {
      this.selectedRowID.set('');
      return;
    }
    this.selectedRowID.set(row.id);
  }


}
