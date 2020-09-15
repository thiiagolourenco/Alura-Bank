System.register(["../models/negociacao", "../models/negociacoes", "../views/mensagemView", "../views/negociacoesView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var negociacao_1, negociacoes_1, mensagemView_1, negociacoesView_1, NegociacaoController, diaSemana;
    return {
        setters: [
            function (negociacao_1_1) {
                negociacao_1 = negociacao_1_1;
            },
            function (negociacoes_1_1) {
                negociacoes_1 = negociacoes_1_1;
            },
            function (mensagemView_1_1) {
                mensagemView_1 = mensagemView_1_1;
            },
            function (negociacoesView_1_1) {
                negociacoesView_1 = negociacoesView_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this.negociacoes = new negociacoes_1.Negociacoes();
                    this.negociacoesView = new negociacoesView_1.NegociacoesView("#negociacoesView");
                    this.mensagemView = new mensagemView_1.MensagemView("#mensagemView");
                    this._inputData = $("#data");
                    this._inputQuantidade = $("#quantidade");
                    this._inputValor = $("#valor");
                    this.negociacoesView.upData(this.negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (data.getDay() == diaSemana.sabado || data.getDay() == diaSemana.domingo) {
                        this.mensagemView.upData('Somente negociações em dias úteis, por favor!');
                        return;
                    }
                    const negociacao = new negociacao_1.Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this.negociacoes.adiciona(negociacao);
                    this.negociacoesView.upData(this.negociacoes);
                    this.mensagemView.upData("Negociação adicionada com sucesso!");
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (diaSemana) {
                diaSemana[diaSemana["domingo"] = 0] = "domingo";
                diaSemana[diaSemana["segunda"] = 1] = "segunda";
                diaSemana[diaSemana["terca"] = 2] = "terca";
                diaSemana[diaSemana["quarta"] = 3] = "quarta";
                diaSemana[diaSemana["quinta"] = 4] = "quinta";
                diaSemana[diaSemana["sexta"] = 5] = "sexta";
                diaSemana[diaSemana["sabado"] = 6] = "sabado";
            })(diaSemana || (diaSemana = {}));
        }
    };
});
