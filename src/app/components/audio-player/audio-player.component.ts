import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {AudioItem} from "../../models/audio-item.model";

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent {

  private _item!: AudioItem;

  @Input() set item(value: AudioItem) {
    this._item = value;
    this.resetAudio()
  }

  get item(): AudioItem {
    return this._item;
  }

  @ViewChild('audio', {read: ElementRef}) audio!: ElementRef<HTMLAudioElement>

  private resetAudio() {
    const audioRef = this.audio?.nativeElement;
    if (audioRef) {
      audioRef.pause();
      audioRef.currentTime = 0;
    }
  }
}
