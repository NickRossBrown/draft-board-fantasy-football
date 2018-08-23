import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
import { Player } from '../player.model';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';




@Component({
  selector: 'app-draft-board',
  templateUrl: './draft-board.component.html',
  styleUrls: ['./draft-board.component.css'],
  providers: [PlayerService],
  animations: [

    trigger('aniname', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('3s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true}),

      ])
    ])

  ]
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

  }

  goToPlayerPage(clickedPlayer: Player) {
     this.router.navigate(['player', clickedPlayer.id]);
   };

   draftPlayer(player,i) {
     console.log(player.drafted)
     player.drafted = true
     this.undraftedPlayers.push(player)
     console.log(player.drafted)
     this.players.splice(i,1)
   }




}
