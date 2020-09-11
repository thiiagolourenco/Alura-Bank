import { Negociacao } from '../models/negociacao';
import { Negociacoes } from '../models/negociacoes';
import { MensagemView } from '../views/mensagemView';
import { NegociacoesView } from '../views/negociacoesView';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this.negociacoesView.upData(this.negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.upData(this.negociacoes);
        this.mensagemView.upData("Negociação adicionada com sucesso!");
    }
}
