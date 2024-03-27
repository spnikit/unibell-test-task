import {Injectable} from '@angular/core';
import {AudioItem} from "../models/audio-item.model";
import {MOCK_DATA} from "../models/mock-data";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AudioStoreService {
  private _store = new BehaviorSubject<AudioItem[]>(MOCK_DATA)
  public store = this._store.asObservable()

}
