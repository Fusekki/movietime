import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  template: `
  <youtube-player
    [videoId]='videoId'
    [height]='height'
    [width]='width'
    (ready)="savePlayer($event)"
    (change)="onStateChange($event)"
></youtube-player>
`,
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent {
  @Input() videoId: string;
  @Input() height: string;
  @Input() width: string;

  constructor() {
   }

  player: YT.Player;

  savePlayer(player) {
    this.player = player;
    // console.log('player instance', player);
  }

  onStateChange(event) {
    // console.log('player state', event.data);
  }
}
