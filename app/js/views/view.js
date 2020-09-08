//Para poder usar o JQuery eu uso os Definitions do typeScript! (o dólar do JQuery)
//Definition: são formas de mapear bibliotecas que eu quero suportar.
class View {
    constructor(seletor) {
        this.elemento = $(seletor);
    }
    upData(negociacoes) {
        this.elemento.html(this.template(negociacoes));
    }
}
