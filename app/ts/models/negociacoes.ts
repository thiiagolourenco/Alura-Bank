import { Negociacao } from './negociacao';
export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return ([] as Negociacoes).concat(this.negociacoes);
    }
}