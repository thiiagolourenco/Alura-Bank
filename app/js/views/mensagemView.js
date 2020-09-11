var Views;
(function (Views) {
    class MensagemView extends Views.View {
        template(modelo) {
            return `
            <p class="alert alert-info">${modelo}</p>               
            `;
        }
    }
    Views.MensagemView = MensagemView;
})(Views || (Views = {}));
