System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(seletor) {
                    this.elemento = $(seletor);
                }
                upData(negociacoes) {
                    this.elemento.html(this.template(negociacoes));
                }
            };
            exports_1("View", View);
        }
    };
});
