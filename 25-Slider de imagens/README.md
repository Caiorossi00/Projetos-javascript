Carrossel de imagens desenvolvido em JavaScript com manipulação de DOM. A aplicação permite ao usuário navegar entre diferentes imagens utilizando controles de avanço e retorno, atualizando o conteúdo exibido de forma dinâmica.

O sistema utiliza um array de URLs como fonte das imagens e mantém um índice para controlar qual imagem está sendo exibida no momento. Ao navegar, o índice é incrementado ou decrementado e ajustado de forma cíclica, garantindo que o carrossel continue funcionando ao ultrapassar os limites da lista.

A imagem exibida é atualizada alterando o atributo `src` de um elemento HTML, sem necessidade de recarregar a página.

## MVP

- Lista de imagens pré-definidas
- Controle de índice da imagem atual
- Botão para avançar para próxima imagem
- Botão para voltar para imagem anterior
- Navegação cíclica (loop infinito)
- Atualização dinâmica da imagem exibida
