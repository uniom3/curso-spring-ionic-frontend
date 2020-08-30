import { RefDTO } from "./ref.dto";
import { PagamentoDTO } from "./pagamento.dto";
import { ItemPedidoDTO } from "./item-pedidos.dto";

export interface PedidoDTO {
    cliente: RefDTO;
    enderecoDeEntrega: RefDTO;
    pagamento: PagamentoDTO;
    itens: ItemPedidoDTO[];
}