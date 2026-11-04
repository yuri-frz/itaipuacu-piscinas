# Apresentação — Yuri Ferraz de Almeida

## A ideia

Itaipuaçu Piscinas é um catálogo de inspiração para piscinas e áreas de lazer. Cada modelo tem dimensões ilustrativas, uma descrição e características próprias. A atividade demonstra a navegação; não realiza vendas nem gera orçamentos.

## Demonstração em poucos minutos

1. Abra o app e mostre que, sem sessão, ele começa no Login.
2. Tente entrar com campos vazios. Mostre a mensagem de validação.
3. Preencha a conta de teste e toque em Explorar piscinas.
4. Na Home, mostre a grade e alterne entre Compactas e Amplas.
5. Abra Brisa ou outro modelo, confira o nome e o ID recebido pela rota.
6. Volte e mostre que a escolha do filtro foi preservada.
7. Abra Perfil, confira o usuário Yuri Ferraz de Almeida e encerre a sessão.
8. Tente voltar: o conteúdo interno segue protegido.

## Pontos para explicar

- Cada arquivo dentro de `app/` corresponde a uma rota.
- O provider na raiz compartilha a sessão com todas as telas.
- `useReducer` representa as duas mudanças possíveis de sessão: entrar e sair.
- `(auth)` e `(app)` organizam os fluxos sem aparecer na URL.
- O layout `(app)` consulta a sessão antes de renderizar qualquer tela interna.
- `replace` troca o Login pela Home; `push` abre o detalhe; `back` retorna.
- O detalhe recebe uma string, procura o objeto correspondente e trata IDs inexistentes.
- O Stack contém as Tabs e a tela de detalhe. As Tabs apresentam destinos do mesmo nível.
- A paleta está em `theme.ts`, inclusive a cor dos headers e das ilustrações.
- As piscinas são desenhadas com Views. Nenhuma imagem precisa ser baixada para mostrar o catálogo.

## O que ainda conferir no celular

Abrir no Expo Go, testar teclado e rolagem, abrir os quatro detalhes e usar o botão físico de voltar. Conferir também o retorno após logout. A exportação de bundles não substitui essa validação em aparelho.
