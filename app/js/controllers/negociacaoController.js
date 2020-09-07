class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        this.negociacoesView.upData(this.negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), //Troco os - por ,
        parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.upData(this.negociacoes);
    }
}
