/* Enunciado do Desafio:

Título: Roleta de Atendimento ao Cliente

Descrição:
Desenvolva um endpoint de API que simule uma roleta para atribuir atendimentos ao cliente. Existem três atendentes disponíveis, cada um com um tempo diferente de atendimento:

    Atendente 1: 30 segundos
    Atendente 2: 1 minuto
    Atendente 3: 1 minuto e meio

Quando o endpoint é acionado, um atendente disponível é escolhido aleatoriamente. Um atendente só fica disponível novamente após concluir o atendimento atual.

Requisitos:

    Crie uma API com um endpoint que simule a roleta de atendimento.
    Mantenha um registro dos atendentes e seus tempos de atendimento.
    Garanta que um atendente só possa ser escolhido novamente após concluir seu atendimento atual.
    Use uma estrutura de dados para controlar a disponibilidade dos atendentes.
    Implemente uma lógica para selecionar aleatoriamente um atendente disponível a cada chamada do endpoint.

Notas Adicionais:

    A solução pode ser escrita em qualquer linguagem de programação moderna.
    Não é necessário implementar uma interface de usuário, apenas o endpoint da API.
    Considere a simplicidade e eficiência da solução.


 */

/* var listaAtendente = [
    { numero: "1", tempoAtendimento: 30, disponivel: true },
    { numero: "2", tempoAtendimento: 60, disponivel: true },
    { numero: "3", tempoAtendimento: 90, disponivel: true }
] */

/* var listaAtendente = [
    { numero: "1", tempoAtendimento: 2, disponivel: true },
    { numero: "2", tempoAtendimento: 4, disponivel: true },
    { numero: "3", tempoAtendimento: 6, disponivel: true }
] */

function chamarEndpoit() {
    let atendentesLivres = listaAtendente.filter(item => item.disponivel)

    if(!atendentesLivres) {
        console.log('Sem atendentes livres!')
        setTimeout(() => {
            chamarEndpoit()
        }, 30000);
        return;
    }

    const atendenteNumero = Math.round(Math.random() * atendentesLivres.length) - 1
    console.log(atendentesLivres.length)
    console.log(atendenteNumero)

    if(atendenteNumero <= 0) {
        console.log("Todos os atendentes ocupados.")
        return;
    }
    
    let atendente = atendentesLivres[atendenteNumero]
    
    if(!atendente.disponivel){
        console.log(`${atendente.numero} indisponível!`)
    } else {
        console.log(`${atendente.numero} em atendimento!`)
        atendente.disponivel = !atendente.disponivel;
        
        setTimeout(() => {
            atendente.disponivel = !atendente.disponivel;
            console.log(`${atendente.numero} disponível!`)
        }, atendente.tempoAtendimento * 1000);
    }
}

chamarEndpoit()

