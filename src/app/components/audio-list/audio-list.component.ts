import {Component, computed, inject, signal} from '@angular/core';
import {AudioItem} from "../../models/audio-item.model";
import {AUDIO_TABLE_COLUMNS} from "../../models/constants";
import {AudioStoreService} from "../../services/audio-store.service";
import {AudioPlayerComponent} from "../audio-player/audio-player.component";
import {AudioTableComponent} from "../audio-table/audio-table.component";

@Component({
  selector: 'app-audio-list',
  standalone: true,
  imports: [
    AudioPlayerComponent,
    AudioTableComponent
  ],
  templateUrl: './audio-list.component.html',
  styleUrl: './audio-list.component.scss'
})
export class AudioListComponent {
  displayedColumns: string[] = AUDIO_TABLE_COLUMNS

  selectedRowID = signal('');
  store = inject(AudioStoreService).store
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
