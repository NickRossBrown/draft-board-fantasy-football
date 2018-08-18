import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  providers: [PlayerService]
})
export class PlayerDetailComponent implements OnInit {
  playerId: number;
  playerToDisplay: Player;

  constructor(
    private route: ActivatedRoute, private location: Location,
    // By including the parameters constructor(private route: ActivatedRoute, private location: Location), any instance of PlayerDetailComponent will have route and location properties that can be accessed by calling this.route and this.location.
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.playerId = parseInt(urlParameters['id']);
     console.log(this.playerId)
   });
    this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
    console.log(this.playerToDisplay)
  }

}
