import { NegociacaoController } from './controllers/negociacaoController';
const negociacaoController = new NegociacaoController();
$(".form").submit(negociacaoController.adiciona.bind(negociacaoController));
