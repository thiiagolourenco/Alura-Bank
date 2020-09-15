
//Estrutura de um decorator de GET.
//(Podemos criar um decorator de classe tb q nos dá acesso a um construtor da classe.)
export function domInject(seletor: string) {

    return function (target: any, key: string) {

        let elemento: JQuery; //elemento do DOM

        const getter = function () {

            if (!elemento) {
                console.log(`buscando  ${seletor} para injetar em ${key}`);
                elemento = $(seletor);
            }

            return elemento;
        }

        Object.defineProperty(target, key, {//Para colocar o dado na variável. Aqui definimos qual get usaremos !
            get: getter
        });
    }
}