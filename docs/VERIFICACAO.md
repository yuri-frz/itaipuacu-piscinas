# Verificação — Itaipuaçu Piscinas

Data: 03/11/2026. Execução em ambiente remoto, usando Node 24.

## Resultado verificado

- TypeScript (`tsc --noEmit`): aprovado.
- Testes de domínio: 6 aprovados, nenhum reprovado.
- Exportação final com `expo export --platform all`: bundles web, Android e iOS gerados.
- Revisão estática independente: nenhum problema material identificado.
- Fluxo da interface: 16 verificações aprovadas.

- Home sem sessão redireciona ao Login.
- Campos vazios mostram erro.
- Senha errada bloqueia a entrada.
- Credenciais corretas abrem a Home.
- Voltar após login não mostra o Login.
- Todos os 4 itens abrem o detalhe correto e voltam à Home.
- Filtro Compactas mostra somente Brisa e Refúgio.
- Retorno do detalhe preserva o filtro da Home.
- Filtro Amplas mostra somente Enseada e Horizonte.
- Filtro Todos restaura os quatro modelos.
- Aba Perfil mostra a sessão correta.
- Abas alternam entre Início e Perfil.
- Logout retorna ao Login.
- Voltar após logout mantém as telas protegidas.
- Sem erros de execução na interface renderizada.
- Links diretos para detalhe e Perfil sem sessão são bloqueados.

## Como o fluxo foi testado

Foi executado o bundle web real em um DOM de testes (JSDOM), com eventos de digitação e clique, navegação e mudanças de histórico. A correção de acessibilidade dos filtros foi verificada: a seleção é exposta como estado de um grupo de opções.

Essa validação não é uma execução em navegador completo nem verifica a apresentação visual em celular. Os bundles nativos foram gerados, mas não foram instalados em aparelho ou emulador. A conferência no Expo Go ainda precisa ser feita, principalmente teclado, rolagem, proporções das ilustrações e botão físico de voltar.

## Escopo da entrega

O catálogo é fictício e a sessão é local e temporária. Não há backend, venda, orçamento ou contato externo. Nenhuma informação dos modelos constitui um projeto técnico.

O ZIP preserva os commits locais. A publicação no GitHub ainda precisa ser feita em um repositório escolhido pelo aluno.
