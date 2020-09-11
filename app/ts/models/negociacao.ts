export class Negociacao {

    //readonly permite apenas a leitura do atributo, diferente do private q proíbe tudo.
    constructor(readonly data: Date, readonly quantidade: number, private _valor: number) {
    }

    get valor() {

        return this._valor;
    }

    get volume() {

        return this.quantidade * this._valor;
    }
}

