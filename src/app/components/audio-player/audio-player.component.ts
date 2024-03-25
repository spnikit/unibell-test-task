import {Component, effect, ElementRef, input, Signal, viewChild} from '@angular/core';
import {AudioItem} from "../../models/audio-item.model";

@Component({
  selector: 'app-audio-player',
  standalone: true,
  imports: [],
  templateUrl: './audio-player.component.html',
  styleUrl: './audio-player.component.scss'
})
export class AudioPlayerComponent {

  item = input.required<AudioItem>()
  audio: Signal<ElementRef<HTMLAudioElement> | undefined> = viewChild('audio', {read: ElementRef})

  constructor() {
    effect(() => {
      this.item();
      this.resetAudio()
    });
  }

  private resetAudio() {
    const audioRef = this.audio()?.nativeElement;
    if (audioRef) {
      audioRef.pause();
      audioRef.currentTime = 0;
    }
  }
}
