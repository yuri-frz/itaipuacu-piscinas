import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Marca } from '../../../components/Marca';
import { AcaoPrincipal } from '../../../components/AcaoPrincipal';
import { useSession } from '../../../context/SessionContext';
import { theme } from '../../../theme';
export default function Perfil() {
  const { usuario, encerrarSessao } = useSession();
  const router = useRouter();
  function sair() { encerrarSessao(); router.replace('/login'); }
  return <SafeAreaView edges={['top', 'left', 'right']} style={s.tela}>
    <ScrollView contentContainerStyle={s.conteudo}>
      <Marca /><Text style={s.eyebrow}>ÁREA DO CLIENTE</Text><Text style={s.titulo}>Seu espaço,{ '\n' }suas ideias.</Text>
      <View style={s.carteira}><View style={s.carteiraTopo}><Text style={s.cliente}>PERFIL DE DEMONSTRAÇÃO</Text><Text style={s.onda}>≈</Text></View>
        <Text style={s.nome}>{usuario?.nome}</Text><Text style={s.email}>{usuario?.email}</Text>
        <View style={s.status}><View style={s.ponto} /><Text style={s.statusTexto}>Acesso liberado ao catálogo</Text></View>
      </View>
      <View style={s.resumo}><Text style={s.numero}>04</Text><View style={{ flex: 1 }}><Text style={s.resumoTitulo}>Jeitos de imaginar o seu quintal.</Text><Text style={s.resumoTexto}>Conheça dimensões e características na aba Início.</Text></View></View>
      <Text style={s.secao}>Uma visita, novas possibilidades.</Text><Text style={s.texto}>Este catálogo reúne modelos de piscinas para explorar diferentes estilos de área de lazer. Todos os exemplos foram criados para a atividade.</Text>
      <View style={s.aviso}><Text style={s.texto}>A sessão é temporária. Ao sair ou fechar o app, você precisará entrar novamente.</Text></View>
      <AcaoPrincipal texto="Encerrar sessão" contorno onPress={sair} />
      <Text style={s.credito}>Yuri Ferraz de Almeida{ '\n' }Aplicativos Híbridos · Aula 8</Text>
    </ScrollView>
  </SafeAreaView>;
}
const c = theme.colors;
const s = StyleSheet.create({
  tela: { flex: 1, backgroundColor: c.fundo }, conteudo: { padding: 24, paddingBottom: 30, maxWidth: 650, width: '100%', alignSelf: 'center' },
  eyebrow: { color: c.amarelo, fontSize: 10, fontWeight: '700', letterSpacing: 1.8, marginTop: 36, marginBottom: 14 },
  titulo: { color: c.texto, fontSize: 40, lineHeight: 46, letterSpacing: -1, fontWeight: '800' },
  carteira: { borderRadius: 22, backgroundColor: c.destaque, padding: 23, marginTop: 26 },
  carteiraTopo: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, cliente: { color: c.fundo, fontSize: 9, fontWeight: '700', letterSpacing: 1.3 },
  onda: { color: c.fundo, fontSize: 30 }, nome: { color: c.fundo, fontSize: 28, lineHeight: 34, fontWeight: '800', marginTop: 25 }, email: { color: c.fundo, fontSize: 14, marginTop: 10 },
  status: { flexDirection: 'row', alignItems: 'center', gap: 7, marginTop: 23 }, ponto: { width: 6, height: 6, borderRadius: 3, backgroundColor: c.fundo }, statusTexto: { color: c.fundo, fontSize: 10 },
  resumo: { flexDirection: 'row', alignItems: 'center', gap: 19, paddingVertical: 26, borderBottomWidth: 1, borderBottomColor: c.linha }, numero: { fontSize: 50, color: c.amarelo, fontWeight: '300' },
  resumoTitulo: { color: c.texto, fontSize: 16, fontWeight: '700', lineHeight: 23 }, resumoTexto: { color: c.apoio, fontSize: 12, lineHeight: 20, marginTop: 5 },
  secao: { color: c.texto, fontSize: 20, fontWeight: '700', marginTop: 28, marginBottom: 13 }, texto: { color: c.apoio, fontSize: 14, lineHeight: 24 },
  aviso: { borderLeftWidth: 2, borderLeftColor: c.amarelo, paddingLeft: 16, marginVertical: 25 }, credito: { color: c.apoio, textAlign: 'center', fontSize: 11, lineHeight: 20, marginTop: 26 },
});
