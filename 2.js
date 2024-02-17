Enunciado do Desafio:
Título: Padronização de Números de Telefone

Descrição:
Você receberá um array de strings contendo números de telefone despadronizados.
Os números de telefone brasileiros seguem o padrão +55 DD 9 XXXX-XXXX, onde DD é o código de área e XXXX-XXXX é o número local. Seu trabalho é criar uma função que transforme esses números em um formato padronizado.

Requisitos:
    A função deve receber um array de strings, cada uma representando um número de telefone.
    Cada número pode conter espaços, hífens e pode ou não incluir o código do país +55.
    O número pode ter um 9 extra no início, que deve ser removido.
    O formato padronizado deve ser apenas números, sem espaços ou outros caracteres, iniciando com 55 e seguido pelo código de área e o número local, sem o 9 extra.
    A função deve retornar um array com os números formatados.

Exemplo:

Entrada:
["+55 55 9 9384-2896", "66 9 9384-2895", "77 9384-2894"]

Saída esperada:
["55 55 9384 2896", "55 66 9384 2895", "55 77 9384 2894"]
  55 55 9384 2896    55 66 9384 2895    55 77 9384 2894

Notas Adicionais:
    Considere que todos os números de telefone fornecidos são válidos e seguem o padrão brasileiro.



****['1', '2', '3']
****/n - talvez +55
*****se tiver 9, remover.
['numero', 'numero']


function formatarNumero(numero) {
    const lista = [];
    numero.forEach(item => {
        let itemFormatado = item.replace(/[^\w\s]/gi, '').replace(' 9 ', '').replace(' ', '');
        
        if(itemFormatado[0] !== '5' && itemFormatado[0] !== '5'){
            //adicionar o lenght aqui para previnir quando o DDD já inicia com 55, ao invés do DDI
            itemFormatado = `55${itemFormatado}`
        }

        lista.push(itemFormatado)
    })
    return lista;
}


console.log(formatarNumero(["+55 55 9 9384-2896", "66 9 9384-2895", "77 9384-2894"]))


