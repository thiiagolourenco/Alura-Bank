class View {
    constructor(seletor) {
        this.elemento = $(seletor);
    }
    upData(negociacoes) {
        this.elemento.html(this.template(negociacoes));
    }
}
