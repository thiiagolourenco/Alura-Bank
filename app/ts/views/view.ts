abstract class View<T> { //Classe n pode ser instanciada e utilização de Generics!

    protected elemento: Element; //O protected permite o pai e os filhos terem acesso.

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    upData(negociacoes: T): void {
        this.elemento.innerHTML = this.template(negociacoes);
    }

    abstract template(modelo: T): string; //É necessário a sobrescrita do método !

}