import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AudioListComponent} from "./components/audio-list/audio-list.component";
import {AudioPlayerComponent} from "./components/audio-player/audio-player.component";
import {AudioTableComponent} from "./components/audio-table/audio-table.component";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [AppComponent, AudioListComponent, AudioPlayerComponent, AudioTableComponent],
  imports: [
    BrowserModule,
    CommonModule,
    MatTableModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
