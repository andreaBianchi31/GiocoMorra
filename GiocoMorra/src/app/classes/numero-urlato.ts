export class NumeroUrlato {
    numero: string | null = null;
    decina: string | null = null;
    trentino: string | null = null;
  
    constructor(
      numero: string | null,
      decina: string | null,
      trentino: string | null
    ) {
      this.numero = numero;
      this.decina = decina;
      this.trentino = trentino;
    }
  }