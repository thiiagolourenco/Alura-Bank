//Para poder usar o JQuery eu uso os Definitions do typeScript! (o dólar do JQuery)
//Definition: são formas de mapear bibliotecas que eu quero suportar.
namespace Views { //namespace é usado para facilitar na programação. 
    //Aqui quando eu faço Views. eu vejo todas as possíveis views do projeto. Eu crio o módulo de views q tem todas as view !
    //Posso criar um atalho para n escrever Views.View por exemplo. import nomeEscolhido = Views.View;
    export abstract class View<T> { //Classe n pode ser instanciada e utilização de Generics!

        protected elemento: JQuery; //O protected permite o pai e os filhos terem acesso.

        constructor(seletor: string) {
            this.elemento = $(seletor);
        }

        upData(negociacoes: T): void {
            this.elemento.html(this.template(negociacoes));
        }

        abstract template(modelo: T): string; //É necessário a sobrescrita do método !

    }
}