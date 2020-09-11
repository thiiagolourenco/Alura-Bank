namespace Views {
    export class MensagemView extends Views.View<string> {

        template(modelo: string): string {
            return `
            <p class="alert alert-info">${modelo}</p>               
            `;
        }

    }
}