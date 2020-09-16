import { NegociacaoParcial } from "../models/InterfaceNegociacaoParcial";
import { Negociacao } from "../models/negociacao";

export class NegociacaoService {

    /* obterNegociacoes(handler: Function): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) =>
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            .catch(err => console.log(err));
    } */
}