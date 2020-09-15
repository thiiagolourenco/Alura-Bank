System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacao;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, quantidade, _valor) {
                    this.data = data;
                    this.quantidade = quantidade;
                    this._valor = _valor;
                }
                get valor() {
                    return this._valor;
                }
                get volume() {
                    return this.quantidade * this._valor;
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
