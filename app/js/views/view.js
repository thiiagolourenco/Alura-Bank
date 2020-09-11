var Views;
(function (Views) {
    class View {
        constructor(seletor) {
            this.elemento = $(seletor);
        }
        upData(negociacoes) {
            this.elemento.html(this.template(negociacoes));
        }
    }
    Views.View = View;
})(Views || (Views = {}));
