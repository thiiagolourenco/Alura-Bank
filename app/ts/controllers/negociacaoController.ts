import { Negociacao } from '../models/negociacao';
import { Negociacoes } from '../models/negociacoes';
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