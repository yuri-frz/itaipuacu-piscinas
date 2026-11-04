import { useState } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Marca } from '../../../components/Marca';
import { IlustracaoPiscina } from '../../../components/IlustracaoPiscina';
import { selecionarProjetos, type Categoria } from '../../../domain/projetos';
import { useSession } from '../../../context/SessionContext';
import { theme } from '../../../theme';
const filtros: { valor: Categoria; titulo: string }[] = [
  { valor: 'todos', titulo: 'Todos' }, { valor: 'compactas', titulo: 'Compactas' }, { valor: 'amplas', titulo: 'Amplas' },
];
export default function Inicio() {
  const [categoria, setCategoria] = useState<Categoria>('todos');
  const { usuario } = useSession();
  const { width } = useWindowDimensions();
  const itens = selecionarProjetos(categoria);
  const router = useRouter();
  return <SafeAreaView edges={['top', 'left', 'right']} style={s.tela}>
    <ScrollView contentContainerStyle={s.conteudo}>
      <View style={s.topo}><Marca /><View style={s.usuario}><Text style={s.iniciais}>YF</Text></View></View>
      <Text style={s.ola}>BEM-VINDO, {usuario?.nome.split(' ')[0].toUpperCase()}</Text>
      <Text style={s.titulo}>Seu refúgio{ '\n' }começa aqui.</Text>
      <Text style={s.apoio}>Água, sol e um espaço para chamar de seu.</Text>
      <View style={s.destaque}>
        <View style={s.linhaDestaque}><Text style={s.marcador}>INSPIRAÇÃO DO DIA</Text><Text style={s.edicao}>01 / 04</Text></View>
        <IlustracaoPiscina formato="organica" />
        <View style={s.legenda}><Text style={s.legendaTitulo}>O quintal merece uma nova história.</Text><Text style={s.legendaApoio}>Explore os modelos e imagine as possibilidades.</Text></View>
      </View>
      <View style={s.cabecalho}><Text style={s.secao}>Escolha seu estilo</Text><Text style={s.contagem}>{itens.length} modelos</Text></View>
      <View style={s.filtros} accessibilityRole="radiogroup" accessibilityLabel="Tamanho da piscina">{filtros.map(filtro => <Pressable key={filtro.valor} accessibilityRole="radio" accessibilityLabel={`Filtrar ${filtro.titulo}`}
        aria-checked={categoria === filtro.valor} onPress={() => setCategoria(filtro.valor)}
        style={[s.filtro, categoria === filtro.valor && s.filtroAtivo]}>
        <Text style={[s.filtroTexto, categoria === filtro.valor && { color: c.fundo }]}>{filtro.titulo}</Text>
      </Pressable>)}</View>
      <View style={s.grade}>{itens.map(projeto => <Pressable key={projeto.id} accessibilityRole="button" accessibilityLabel={`Ver piscina ${projeto.nome}`}
        onPress={() => router.push({ pathname: '/projeto/[id]', params: { id: projeto.id } })}
        style={({ pressed }) => [s.card, { width: width < 360 ? '100%' : '47.5%' }, pressed && { opacity: 0.8 }]}>
        <IlustracaoPiscina formato={projeto.formato} pequena />
        <View style={s.cardConteudo}><Text style={s.tipo}>{projeto.categoria === 'compactas' ? 'COMPACTA' : 'AMPLA'}</Text>
          <View style={s.cardTitulo}><Text style={s.nome}>{projeto.nome}</Text><Text style={s.seta}>↗</Text></View>
          <Text style={s.medidas}>{projeto.medidas}</Text><Text style={s.chamada}>{projeto.chamada}</Text>
        </View>
      </Pressable>)}</View>
      <View style={s.nota}><Text style={s.notaTitulo}>Cada espaço tem o seu potencial.</Text><Text style={s.notaTexto}>Modelos e medidas ilustrativos, criados para este catálogo acadêmico.</Text></View>
    </ScrollView>
  </SafeAreaView>;
}
const c = theme.colors;
const s = StyleSheet.create({
  tela: { flex: 1, backgroundColor: c.fundo }, conteudo: { padding: 22, paddingBottom: 36, maxWidth: 760, alignSelf: 'center', width: '100%' },
  topo: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 },
  usuario: { borderWidth: 1, borderColor: c.linha, borderRadius: 15, padding: 12 }, iniciais: { color: c.destaque, fontWeight: '800', fontSize: 12 },
  ola: { color: c.destaque, fontSize: 10, letterSpacing: 1.7, fontWeight: '700', marginBottom: 12 },
  titulo: { color: c.texto, fontSize: 42, lineHeight: 47, letterSpacing: -1.5, fontWeight: '800' },
  apoio: { color: c.apoio, fontSize: 14, lineHeight: 22, marginTop: 14 },
  destaque: { marginTop: 26, borderRadius: 23, borderWidth: 1, borderColor: c.linha, overflow: 'hidden', backgroundColor: c.painel },
  linhaDestaque: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 }, marcador: { color: c.amarelo, fontSize: 9, letterSpacing: 1.5, fontWeight: '700' }, edicao: { color: c.apoio, fontSize: 10 },
  legenda: { padding: 18 }, legendaTitulo: { color: c.texto, fontSize: 16, fontWeight: '700', lineHeight: 22 }, legendaApoio: { color: c.apoio, fontSize: 12, lineHeight: 19, marginTop: 7 },
  cabecalho: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 32, marginBottom: 18, gap: 10 },
  secao: { color: c.texto, fontSize: 23, fontWeight: '700' }, contagem: { color: c.apoio, fontSize: 11 },
  filtros: { flexDirection: 'row', gap: 8, marginBottom: 23, flexWrap: 'wrap' }, filtro: { borderWidth: 1, borderColor: c.linha, paddingVertical: 10, paddingHorizontal: 17, borderRadius: 25, minHeight: 44, justifyContent: 'center' },
  filtroAtivo: { backgroundColor: c.destaque, borderColor: c.destaque }, filtroTexto: { color: c.apoio, fontSize: 12, fontWeight: '700' },
  grade: { flexDirection: 'row', flexWrap: 'wrap', gap: 14, justifyContent: 'space-between' },
  card: { backgroundColor: c.painel, borderColor: c.linha, borderWidth: 1, borderRadius: 20, overflow: 'hidden' },
  cardConteudo: { padding: 14 }, tipo: { color: c.amarelo, fontSize: 8, letterSpacing: 1.6, fontWeight: '700' },
  cardTitulo: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  nome: { color: c.texto, fontSize: 22, fontWeight: '700', flex: 1 }, seta: { color: c.destaque, fontSize: 20 },
  medidas: { color: c.destaque, fontSize: 13, marginTop: 8 }, chamada: { color: c.apoio, fontSize: 11, lineHeight: 18, marginTop: 8 },
  nota: { borderLeftWidth: 2, borderLeftColor: c.amarelo, paddingLeft: 15, marginTop: 30 },
  notaTitulo: { color: c.texto, fontSize: 13, fontWeight: '600' }, notaTexto: { color: c.apoio, fontSize: 11, lineHeight: 18, marginTop: 7 },
});
