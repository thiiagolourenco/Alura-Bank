class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new Views.NegociacoesView("#negociacoesView");
        this.mensagemView = new Views.MensagemView("#mensagemView");
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this.negociacoesView.upData(this.negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.upData(this.negociacoes);
        this.mensagemView.upData("Negociação adicionada com sucesso!");
    }
}
