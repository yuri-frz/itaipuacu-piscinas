export type Categoria = 'todos' | 'compactas' | 'amplas';
export type Formato = 'retangular' | 'organica' | 'raia' | 'spa';
export type Projeto = {
  id: string; nome: string; categoria: Exclude<Categoria, 'todos'>; formato: Formato;
  chamada: string; medidas: string; profundidade: string; perfil: string;
  descricao: string; diferenciais: string[];
};

// Modelos ilustrativos criados para o trabalho. Não são projetos técnicos nem ofertas reais.
export const projetos: Projeto[] = [
  {
    id: 'brisa', nome: 'Brisa', categoria: 'compactas', formato: 'retangular',
    chamada: 'Seu cantinho de pausa.', medidas: '4,0 × 2,5 m', profundidade: '1,30 m', perfil: 'Quintais compactos',
    descricao: 'Uma composição simples para transformar um canto do quintal em área de lazer. O desenho retangular combina com um deck pequeno e deixa espaço para descansar ao redor.',
    diferenciais: ['Desenho com linhas retas', 'Referência de acesso por degraus', 'Composição com deck de apoio'],
  },
  {
    id: 'enseada', nome: 'Enseada', categoria: 'amplas', formato: 'organica',
    chamada: 'Mais espaço para reunir.', medidas: '7,0 × 3,5 m', profundidade: '1,40 m', perfil: 'Áreas de lazer amplas',
    descricao: 'Curvas suaves dão um ar descontraído ao ambiente. A proposta valoriza a integração entre piscina, jardim e espaço de convivência, com uma área externa aberta.',
    diferenciais: ['Contorno com cantos arredondados', 'Área lateral para convivência', 'Composição integrada ao paisagismo'],
  },
  {
    id: 'horizonte', nome: 'Horizonte', categoria: 'amplas', formato: 'raia',
    chamada: 'Um novo ritmo para o dia.', medidas: '9,0 × 2,5 m', profundidade: '1,40 m', perfil: 'Terrenos alongados',
    descricao: 'Uma referência alongada que acompanha o comprimento do terreno. O visual é mais discreto, com bordas retas e uma faixa de deck para conectar a casa ao espaço de lazer.',
    diferenciais: ['Proporção alongada', 'Bordas de desenho linear', 'Faixa lateral de circulação'],
  },
  {
    id: 'refugio', nome: 'Refúgio', categoria: 'compactas', formato: 'spa',
    chamada: 'Pequeno no espaço. Grande na pausa.', medidas: '3,0 × 3,0 m', profundidade: '1,10 m', perfil: 'Pátios e espaços reservados',
    descricao: 'Um modelo de inspiração spa, pensado como ponto de descanso em uma área externa menor. A composição aproxima água, deck e um espaço tranquilo para sentar.',
    diferenciais: ['Formato compacto de inspiração spa', 'Referência de banco integrado', 'Composição para um ambiente reservado'],
  },
];

export function localizarProjeto(id: string | string[] | undefined): Projeto | undefined {
  if (typeof id !== 'string') return undefined;
  return projetos.find(projeto => projeto.id === id);
}
export function selecionarProjetos(categoria: Categoria): Projeto[] {
  return categoria === 'todos' ? projetos : projetos.filter(projeto => projeto.categoria === categoria);
}
