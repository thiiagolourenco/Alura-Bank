import { Negociacao } from '../models/negociacao';
import { Negociacoes } from '../models/negociacoes';
import { NegociacaoParcial } from '../models/InterfaceNegociacaoParcial';
import { MensagemView } from '../views/mensagemView';
import { NegociacoesView } from '../views/negociacoesView';
import { logarTempoDeExecucao } from '../helpers/decorators/logarTempoDeExecucao';
import { domInject } from '../helpers/decorators/domInject';

export class NegociacaoController {

    @domInject("#data")//A ideia aqui é criar um lazy loading
    private _inputData: JQuery;

    @domInject("#quantidade")
    private _inputQuantidade: JQuery;

    @domInject("#valor")
    private _inputValor: JQuery;

    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView");
    private mensagemView = new MensagemView("#mensagemView");

    constructor() {
        this.negociacoesView.upData(this.negociacoes);
    }

    @logarTempoDeExecucao()
    adiciona(event: Event) {

        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g, ','));
        if (data.getDay() == diaSemana.sabado || data.getDay() == diaSemana.domingo) {

            this.mensagemView.upData('Somente negociações em dias úteis, por favor!');
            return
        }

        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')), //Troco os - por ,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val()));

        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.upData(this.negociacoes);
        this.mensagemView.upData("Negociação adicionada com sucesso!");
    }

    importarDados() {

        function isOK(res: Response) {

            if (res.ok) {
                return res;
            } else {
                throw new Error(res.statusText);
            }
        }

        fetch('http://localhost:8080/dados')
            .then(res => isOK(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) => {
                dados
                    .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
                    .forEach(negociacao => this.negociacoes.adiciona(negociacao));
                this.negociacoesView.upData(this.negociacoes);
            })
            .catch(err => console.log(err.message))
    }
}

enum diaSemana {
    domingo,
    segunda,
    terca,
    quarta,
    quinta,
    sexta,
    sabado
}