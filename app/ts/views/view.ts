//Para poder usar o JQuery eu uso os Definitions do typeScript! (o dólar do JQuery)
//Definition: são formas de mapear bibliotecas que eu quero suportar.
abstract class View<T> { //Classe n pode ser instanciada e utilização de Generics!

    protected elemento: JQuery; //O protected permite o pai e os filhos terem acesso.

    constructor(seletor: string) {
        this.elemento = $(seletor);
    }

    upData(negociacoes: T): void {
        this.elemento.html(this.template(negociacoes));
    }

    abstract template(modelo: T): string; //É necessário a sobrescrita do método !

}