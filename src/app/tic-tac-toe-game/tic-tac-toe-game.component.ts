import { Component, OnInit } from '@angular/core';
import { Gamelogic } from '../gamelogic';

@Component({
  selector: 'app-tic-tac-toe-game',
  templateUrl: './tic-tac-toe-game.component.html',
  styleUrls: ['./tic-tac-toe-game.component.scss'],
  providers: [Gamelogic]
})

export class TicTacToeGameComponent implements OnInit {

  constructor(public game: Gamelogic) { }

  ngOnInit(): void {
  }

  startGame(): void {
    this.game.gameStart();
    const currentPlayer = 'Current turn: Player: ' + this.game.currentTurn;
    const information = document.querySelector('.current-status');
    information.innerHTML = currentPlayer;
  }

  async clickSubfield( subfield: any): Promise<void> {
    if ( this.game.gameStatus === 1 ) {
      const position = subfield.currentTarget.getAttribute('position');
      const information = document.querySelector('.current-status');

      this.game.setField(position, this.game.currentTurn);
      const color = this.game.getPlayerColorClass();
      subfield.currentTarget.classList.add(color);
      console.log(position);


      await this.game.checkGameEndWinner().then( (end: boolean) => {
        if ( this .game.gameStatus === 0 && end ) {
        information.innerHTML = "The winner is player " + this.game.currentTurn;
        }
      });

      await this.game.checkGameEndFull().then( (end: boolean) => {
        if ( this .game.gameStatus === 0 && end ) {
        information.innerHTML = "It's a draw!";
        }
      });

      this.game.changePlayer();

      if (this.game.gameStatus === 1) {
        const currentPlayer = 'Current turn: Player: ' + this.game.currentTurn;
        information.innerHTML = currentPlayer;
      }
    }
  }
}
