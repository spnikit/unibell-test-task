import {Component} from '@angular/core';
import {AudioItem} from "../../models/audio-item.model";
import {AUDIO_TABLE_COLUMNS} from "../../models/constants";
import {AudioStoreService} from "../../services/audio-store.service";
import {BehaviorSubject, combineLatest} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-audio-list',
  templateUrl: './audio-list.component.html',
  styleUrls: ['./audio-list.component.scss']
})
export class AudioListComponent {
  displayedColumns: string[] = AUDIO_TABLE_COLUMNS
  selectedRowID$ = new BehaviorSubject<string>('');
  store$ = this.audioStoreService.store

  constructor(public audioStoreService: AudioStoreService) {
  }

  selectedItem$ =
    combineLatest([this.store$, this.selectedRowID$])
      .pipe(
        map(([store, selectedRowId]) => {
          return store.find((item) => item.id === selectedRowId)
        })
      )

  handleRowClick(row: AudioItem) {
    if (row.id === this.selectedRowID$.value) {
      this.selectedRowID$.next('');
      return;
    }
    this.selectedRowID$.next(row.id);
  }

}
