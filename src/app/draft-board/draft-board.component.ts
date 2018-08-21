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
  undraftedPlayers: Player[];
  // draftedPlayers: Player[];


  constructor(
    private router: Router,
    private playerService: PlayerService
  ) {}
  // this.playerService should anywhere in the draftbaord Component class.

  ngOnInit(){
    console.log(this.players)
    this.players = this.playerService.getPlayers();
    this.undraftedPlayers = this.playerService.getPlayers();
    // this.undraftedPlayers = this.playerService.getUndraftedPlayers();
    // this.players.forEach (player => {
    // this.undraftedPlayers += player
    // })
    // this.undraftedPlayers += player
    // })
  }

  goToPlayerPage(clickedPlayer: Player) {
     this.router.navigate(['player', clickedPlayer.id]);
   };

   draftPlayer(i) {
     this.players.splice(i,1)
   }



}
