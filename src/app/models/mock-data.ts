import {AudioItem} from "./audio-item.model";
import {AUDIO_STATIC_PATH} from "./constants";

export const MOCK_DATA: AudioItem[] = [
  {id: '1', name: 'Better Wave', fileName: 'better.mp3', src: `${AUDIO_STATIC_PATH}/better.mp3`},
  {id: '2', name: 'Meeting with Future', fileName: 'meeting.mp3', src: `${AUDIO_STATIC_PATH}/meeting.mp3`},
  {id: '3', name: 'Whistle my head', fileName: 'whistle.mp3', src: `${AUDIO_STATIC_PATH}/whistle.mp3`},
]
