import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
import { Player } from '../player.model';




@Component({
  selector: 'app-draft-board',
  templateUrl: './draft-board.component.html',
  styleUrls: ['./draft-board.component.css'],
  providers: [PlayerService]
})
export class DraftBoardComponent implements OnInit {
  players: Player[];

  constructor(
    private router: Router,
    private playerService: PlayerService
  ) {}
  // this.playerService should anywhere in the draftbaord Component class.

  ngOnInit(){
    this.players = this.playerService.getPlayers();
  }

  goToPlayerPage(clickedPlayer: Player) {
     this.router.navigate(['player', clickedPlayer.id]);
   };

}
