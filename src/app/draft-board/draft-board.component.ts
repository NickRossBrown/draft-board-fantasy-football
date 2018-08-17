import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-draft-board',
  templateUrl: './draft-board.component.html',
  styleUrls: ['./draft-board.component.css']
  providers: [PlayerService]
})
export class DraftBoardComponent implements OnInit {
  players: PLayer[];

  constructor(
    private router: Router,
    private playerService: PlayerService
  ) {}
  // this.playerService should anywhere in the draftbaord Component class.

  ngOnInit(){
    this.players = this.playerService.getPlayers();
  }

}
