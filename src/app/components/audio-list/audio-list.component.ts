import {
  ChangeDetectorRef,
  Component,
  computed,
  ElementRef,
  inject,
  Renderer2,
  Signal,
  signal,
  viewChild
} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {AudioItem} from "../../models/audio-item.model";
import {AUDIO_TABLE_COLUMNS} from "../../models/constants";
import {AudioStoreService} from "../../services/audio-store.service";

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
  selectedRowID = signal('');
  displayedColumns: string[] = AUDIO_TABLE_COLUMNS

  private store = inject(AudioStoreService).store
  private renderer2 = inject(Renderer2)

  dataSource = this.store();

  selectedItem = computed(() => {
    return this.store().find(item => item.id === this.selectedRowID())
  })


  audio: Signal<ElementRef<HTMLAudioElement> | undefined> = viewChild('audio', {read: ElementRef})

  handleRowClick(row: AudioItem) {
    this.resetAudio()
    if (row.id === this.selectedRowID()) {
      this.selectedRowID.set('');
      return;
    }

    this.selectedRowID.set(row.id);
  }

  resetAudio() {
    const audioRef = this.audio()?.nativeElement;
    if (audioRef) {
      audioRef.pause();
      audioRef.currentTime = 0;
    }
  }
}
