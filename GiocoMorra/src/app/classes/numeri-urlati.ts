import { NumeroUrlato } from "./numero-urlato";

export class NumeriUrlati {
    due: NumeroUrlato = new NumeroUrlato('due', 'venti', 'un per un');
    tre: NumeroUrlato = new NumeroUrlato('tre', 'trenta', 'trema il papa');
    quattro: NumeroUrlato = new NumeroUrlato('quattro', 'quaranta', 'quater');
    cinque: NumeroUrlato = new NumeroUrlato('cinque', 'cinquanta', 'sinque');
    sei: NumeroUrlato = new NumeroUrlato('sei', 'sessanta', null);
    sette: NumeroUrlato = new NumeroUrlato('sette', 'settanta', null);
    otto: NumeroUrlato = new NumeroUrlato('otto', 'ottanta', null);
    nove: NumeroUrlato = new NumeroUrlato('nove', 'novanta', null);
    dieci: NumeroUrlato = new NumeroUrlato('due', 'venti', null);
}
