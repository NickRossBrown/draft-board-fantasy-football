import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { PLAYERS } from './mock-players';

@Injectable()
export class PlayerService {

  constructor() { }

  getPlayers() {
    return PLAYERS;
  }

}
