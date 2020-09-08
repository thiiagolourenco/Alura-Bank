class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    upData(negociacoes) {
        this.elemento.innerHTML = this.template(negociacoes);
    }
}
