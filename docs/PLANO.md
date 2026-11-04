# Projeto — Itaipuaçu Piscinas

Aluno: Yuri Ferraz de Almeida.
Objetivo: cumprir o fluxo Login → Home com abas → Detalhe → Voltar, protegendo telas internas.

## Decisões
Aplicativo independente Expo/React Native/TypeScript, usando as versões já verificadas na atividade.
Visual próprio: fundo escuro, turquesa e areia; ilustrações geométricas locais, grade de modelos e filtros por categoria.
Catálogo fictício, sem preços, contatos, servidor ou operações comerciais. Sessão temporária.
Context usa reducer; os dados e regras de acesso ficam em domain/, separados dos componentes visuais.

## Etapas
1. Testar validação de acesso, busca estrita por ID e filtros; implementar os módulos de domínio.
2. Criar SessionProvider, layouts (auth)/(app), login, abas Início/Perfil, grid filtrável e detalhe protegido.
3. Verificar tipos, seis testes de domínio e fluxo real do bundle web em DOM de testes; gerar bundles de todas as plataformas.
4. Documentar execução e apresentação, preservar commits locais e empacotar um ZIP independente.

## Pontos de conferência
Acesso direto sem sessão; credenciais erradas; login sem retorno ao Login; quatro detalhes; ID inválido; voltar; filtros; logout seguido de voltar; leitura de parâmetros textuais.
