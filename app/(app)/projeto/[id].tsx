import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { IlustracaoPiscina } from '../../../components/IlustracaoPiscina';
import { AcaoPrincipal } from '../../../components/AcaoPrincipal';
import { localizarProjeto } from '../../../domain/projetos';
import { theme } from '../../../theme';
export default function DetalheProjeto() {
  const { id } = useLocalSearchParams<{ id?: string | string[] }>();
  const projeto = localizarProjeto(id);
  const router = useRouter();
  function voltar() { if (router.canGoBack()) router.back(); else router.replace('/'); }
  if (!projeto) return <View style={s.vazio}><Text style={s.titulo}>Esse modelo não está no catálogo.</Text>
    <Text style={s.descricao}>Confira os modelos disponíveis e encontre outra inspiração.</Text><AcaoPrincipal texto="Voltar aos modelos" onPress={() => router.replace('/')} /></View>;
  return <ScrollView contentContainerStyle={s.conteudo}>
    <Stack.Screen options={{ title: `Modelo ${projeto.nome}` }} />
    <IlustracaoPiscina formato={projeto.formato} />
    <Text style={s.eyebrow}>ITAIPUAÇU PISCINAS / COLEÇÃO CONCEITO</Text><Text style={s.titulo}>{projeto.nome}</Text>
    <Text style={s.chamada}>{projeto.chamada}</Text>
    <View style={s.ficha}><View style={s.dado}><Text style={s.rotulo}>DIMENSÕES</Text><Text style={s.valor}>{projeto.medidas}</Text></View>
      <View style={[s.dado, s.divisoria]}><Text style={s.rotulo}>PROFUNDIDADE</Text><Text style={s.valor}>{projeto.profundidade}</Text></View>
    </View>
    <Text style={s.perfil}>{projeto.perfil}</Text><Text style={s.descricao}>{projeto.descricao}</Text>
    <Text style={s.secao}>O que faz parte da ideia</Text>
    {projeto.diferenciais.map((item, indice) => <View key={item} style={s.item}><Text style={s.numero}>0{indice + 1}</Text><Text style={s.itemTexto}>{item}</Text></View>)}
    <View style={s.aviso}><Text style={s.avisoTexto}>Esta é uma referência ilustrativa do trabalho. Medidas e desenhos não substituem um projeto técnico.</Text></View>
    <Text style={s.id}>Identificador do modelo: {projeto.id}</Text><AcaoPrincipal texto="Voltar aos modelos" onPress={voltar} />
  </ScrollView>;
}
const c = theme.colors;
const s = StyleSheet.create({
  conteudo: { padding: 24, paddingBottom: 45, maxWidth: 650, alignSelf: 'center', width: '100%' },
  eyebrow: { color: c.destaque, fontSize: 9, letterSpacing: 1.3, fontWeight: '700', marginTop: 28, marginBottom: 12 },
  titulo: { color: c.texto, fontSize: 43, lineHeight: 49, fontWeight: '800', letterSpacing: -1 },
  chamada: { color: c.apoio, fontSize: 16, lineHeight: 24, marginTop: 9 },
  ficha: { flexDirection: 'row', backgroundColor: c.painel, borderWidth: 1, borderColor: c.linha, borderRadius: 16, marginVertical: 26, paddingVertical: 20 },
  dado: { flex: 1, paddingHorizontal: 17 }, divisoria: { borderLeftWidth: 1, borderLeftColor: c.linha }, rotulo: { color: c.apoio, fontSize: 8, letterSpacing: 1.1 },
  valor: { color: c.destaque, fontSize: 22, fontWeight: '700', marginTop: 8 }, perfil: { color: c.amarelo, fontSize: 13, fontWeight: '700' },
  descricao: { color: c.apoio, fontSize: 15, lineHeight: 26, marginTop: 13, marginBottom: 23 },
  secao: { color: c.texto, fontSize: 19, fontWeight: '700', marginBottom: 10 }, item: { flexDirection: 'row', gap: 17, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: c.linha },
  numero: { color: c.destaque, fontSize: 12 }, itemTexto: { flex: 1, color: c.texto, fontSize: 14, lineHeight: 21 },
  aviso: { backgroundColor: c.painel, padding: 17, borderRadius: 12, marginTop: 24 }, avisoTexto: { color: c.apoio, fontSize: 11, lineHeight: 19 },
  id: { color: c.apoio, fontSize: 10, marginVertical: 24 }, vazio: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: c.fundo, gap: 18 },
});
