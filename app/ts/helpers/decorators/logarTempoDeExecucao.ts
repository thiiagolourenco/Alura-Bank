//Estrutura de um decorator de função. 
//Ele vai interceptar quando a função 
//q ele estiver ligado for executada e chamar essa função q tem dentro do decorator
export function logarTempoDeExecucao() {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;

        descriptor.value = function (...args: any[]) {//pode receber vários ou nenhum parâmetro, por isso usamos o args: any[].

            const retorno = metodoOriginal.apply(this, args);
            return retorno;
        }

        return descriptor;
    }
}