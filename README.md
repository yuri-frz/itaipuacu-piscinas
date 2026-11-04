# Itaipuaçu Piscinas

**Yuri Ferraz de Almeida**  
Aplicativos Híbridos · Aula 8 · Expo Router

Um aplicativo de inspiração para áreas de lazer. A ideia é passear por quatro modelos de piscinas, comparar seus espaços e conhecer os detalhes de cada um.

Esta versão tem uma identidade própria: fundo azul profundo, detalhes em turquesa e areia, piscinas desenhadas com componentes nativos, catálogo em grade e filtros de tamanho. O conteúdo é ilustrativo, criado para a atividade; não representa ofertas, projetos técnicos ou serviços reais de uma empresa.

## Comece por aqui

Tenha Node.js 22.18 ou superior (Node 24 recomendado). Extraia o ZIP, entre na pasta do projeto e abra um terminal onde está o `package.json`.

```bash
npm ci
npm start
```

Abra o QR Code com o Expo Go compatível com o SDK 58. Para a conexão local, computador e celular precisam estar na mesma rede. Se houver bloqueio de rede, `npx expo start --tunnel` é uma alternativa; o Expo poderá solicitar a instalação do suporte de túnel.

Também é possível rodar no navegador:

```bash
npm run web
```

## Entre com a conta de demonstração

| Campo | Valor |
| --- | --- |
| E-mail | yuri@exemplo.com |
| Senha | 123456 |

O botão **Só quer conhecer? Use a conta de teste.** preenche os dados. Depois toque em **Explorar piscinas**.

A sessão existe apenas em memória, conforme o exemplo da aula. Fechar o aplicativo ou atualizar a página apaga a sessão. Não há cadastro nem comunicação com servidor. Em um sistema real, o servidor também precisaria validar o acesso aos dados.

## Uma volta pelo app

1. Sem sessão, a Home redireciona para o Login.
2. Campos vazios ou credenciais erradas mostram uma mensagem de erro.
3. Ao entrar, `router.replace('/')` troca o Login pela Home.
4. A aba Início apresenta os modelos Brisa, Enseada, Horizonte e Refúgio.
5. Os filtros Todos, Compactas e Amplas mudam os modelos apresentados. A escolha permanece ao abrir e fechar um detalhe.
6. Ao tocar em um modelo, a rota `/projeto/[id]` recebe seu identificador e mostra suas informações.
7. O botão Voltar aos modelos retorna à tela anterior. Se não houver tela anterior, ele abre a Home.
8. A aba Perfil mostra Yuri e permite encerrar a sessão. Voltar depois de sair não libera as telas internas.

## O código, sem mistério

| Local | Papel no projeto |
| --- | --- |
| `theme.ts` | Paleta única usada pelas telas, ilustrações e headers. |
| `domain/acesso.ts` | Regras da conta local de demonstração. |
| `domain/projetos.ts` | Catálogo tipado, filtro de categoria e busca estrita pelo ID. |
| `context/SessionContext.tsx` | Context global com `useReducer` para entrar e sair. |
| `app/_layout.tsx` | Monta o provider e o Stack raiz. |
| `app/(auth)/` | Layout e tela de login. |
| `app/(app)/_layout.tsx` | Protege o grupo inteiro com `Redirect`. |
| `app/(app)/(tabs)/` | Abas Início e Perfil. |
| `app/(app)/projeto/[id].tsx` | Detalhe dinâmico com `useLocalSearchParams`. |
| `components/IlustracaoPiscina.tsx` | Ilustrações locais, sem imagens externas. |
| `tests/catalogo.test.ts` | Seis testes de credenciais, identificadores e filtros. |

Os grupos entre parênteses organizam os arquivos e não fazem parte da URL. Exemplos de rotas: `/login`, `/`, `/perfil` e `/projeto/brisa`.

O detalhe pertence ao Stack acima das Tabs. Por isso as abas desaparecem ao abrir um modelo. O esquema de deep link configurado é `itaipuacupiscinas`; um exemplo é `itaipuacupiscinas://projeto/brisa`. O acesso continua condicionado à sessão.

## Para verificar

```bash
npm run check
npx expo export --platform all
```

O primeiro comando verifica TypeScript e executa os seis testes de domínio. O segundo exporta os bundles web, Android e iOS; não gera um APK. Veja o alcance dos testes em `docs/VERIFICACAO.md` e o roteiro de apresentação em `docs/APRESENTACAO.md`.

## Para entregar no GitHub

O ZIP preserva um repositório Git local com os commits das etapas. Configure seu nome e e-mail para novos commits e crie um repositório vazio na sua conta. Depois use:

```bash
git log --oneline
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin entrega-aula08
```

Substitua a URL pelo endereço do repositório criado. Nenhum endereço remoto ou token está configurado neste projeto, e a publicação no GitHub ainda precisa ser feita.

## Material de apoio

- Slides da Aula 8 fornecidos com a atividade: objetivo do slide 4 e checklist final.
- [Instalação do Expo Router](https://docs.expo.dev/router/installation/)
- [Autenticação com Context e Redirect](https://docs.expo.dev/router/advanced/authentication-rewrites/)
- [Rotas dinâmicas](https://docs.expo.dev/router/advanced/dynamic-routes/)

A estrutura usa `Redirect` para acompanhar o conteúdo dos slides. Como o P1 original não foi fornecido, esta entrega é uma base independente criada para o mesmo objetivo.
