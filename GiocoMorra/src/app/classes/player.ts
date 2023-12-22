const DEFAULT_NAME: string = 'Player';

export class Player {
  username: string = DEFAULT_NAME;
  punteggio: number = 0;

  constructor(username: string) {
    this.username = username;
    this.punteggio = 0;
  }

  resetPunteggio() {
    this.punteggio = 0;
  }
}
