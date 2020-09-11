import { Negociacao } from '../models/negociacao';
import { Negociacoes } from '../models/negociacoes';
import { MensagemView } from '../views/mensagemView';
import { NegociacoesView } from '../views/negociacoesView';

export class NegociacaoController {

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView");
    private mensagemView = new MensagemView("#mensagemView");

    constructor() {
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this.negociacoesView.upData(this.negociacoes);
    }

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