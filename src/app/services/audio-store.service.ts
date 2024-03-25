import {Injectable, signal} from '@angular/core';
import {AudioItem} from "../models/audio-item.model";
import {MOCK_DATA} from "../models/mock-data";

@Injectable({
  providedIn: 'root'
})
export class AudioStoreService {
  private _store = signal<AudioItem[]>(MOCK_DATA)

  public store = this._store.asReadonly()

}
