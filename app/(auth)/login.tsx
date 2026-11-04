import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Marca } from '../../components/Marca';
import { IlustracaoPiscina } from '../../components/IlustracaoPiscina';
import { AcaoPrincipal } from '../../components/AcaoPrincipal';
import { useSession } from '../../context/SessionContext';
import { theme } from '../../theme';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const { iniciarSessao } = useSession();
  const router = useRouter();
  function entrar() {
    const mensagem = iniciarSessao(email, senha);
    if (mensagem) { setErro(mensagem); return; }
    setErro('');
    router.replace('/');
  }
  return <SafeAreaView style={s.tela}>
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={s.conteudo} keyboardShouldPersistTaps="handled">
        <Marca /><View style={s.hero}><IlustracaoPiscina formato="organica" /></View>
        <View style={s.tituloLinha}><View style={s.traco} /><Text style={s.eyebrow}>SEU PRÓXIMO MERGULHO</Text></View>
        <Text style={s.titulo}>O verão começa{ '\n' }no seu quintal.</Text>
        <Text style={s.apoio}>Entre e encontre uma piscina que combina com o seu espaço.</Text>
        <View style={s.formulario}>
          <Text style={s.rotulo}>SEU E-MAIL</Text><TextInput accessibilityLabel="E-mail" value={email} onChangeText={setEmail}
            placeholder="voce@email.com" keyboardType="email-address" autoCapitalize="none" autoCorrect={false}
            autoComplete="email" style={s.campo} placeholderTextColor={theme.colors.apoio} />
          <Text style={s.rotulo}>SUA SENHA</Text><TextInput accessibilityLabel="Senha" value={senha} onChangeText={setSenha}
            placeholder="Digite sua senha" secureTextEntry autoCapitalize="none" autoComplete="current-password"
            returnKeyType="go" onSubmitEditing={entrar} style={s.campo} placeholderTextColor={theme.colors.apoio} />
          {!!erro && <Text accessibilityRole="alert" style={s.erro}>{erro}</Text>}
          <View style={{ marginTop: 24 }}><AcaoPrincipal texto="Explorar piscinas" onPress={entrar} /></View>
        </View>
        <Pressable accessibilityRole="button" accessibilityLabel="Preencher acesso de demonstração"
          onPress={() => { setEmail('yuri@exemplo.com'); setSenha('123456'); setErro(''); }} style={({ pressed }) => [s.demo, pressed && { opacity: 0.7 }]}>
          <Text style={s.demoTitulo}>Só quer conhecer? Use a conta de teste.</Text>
          <Text style={s.demoTexto}>yuri@exemplo.com · senha 123456</Text>
        </Pressable>
        <Text style={s.rodape}>Yuri Ferraz de Almeida · Aplicativos Híbridos</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>;
}
const c = theme.colors;
const s = StyleSheet.create({
  tela: { flex: 1, backgroundColor: c.fundo }, conteudo: { padding: 24, paddingBottom: 36, width: '100%', maxWidth: 550, alignSelf: 'center' },
  hero: { marginTop: 26, marginBottom: 28 }, tituloLinha: { flexDirection: 'row', gap: 9, alignItems: 'center', marginBottom: 12 },
  traco: { width: 22, height: 2, backgroundColor: c.amarelo }, eyebrow: { color: c.amarelo, fontSize: 9, fontWeight: '700', letterSpacing: 1.8 },
  titulo: { color: c.texto, fontSize: 37, lineHeight: 43, fontWeight: '800', letterSpacing: -1.1 },
  apoio: { color: c.apoio, fontSize: 14, lineHeight: 23, marginTop: 14 }, formulario: { marginTop: 16 },
  rotulo: { color: c.apoio, fontSize: 10, letterSpacing: 1.7, fontWeight: '700', marginTop: 21, marginBottom: 10 },
  campo: { color: c.texto, fontSize: 16, minHeight: 54, borderBottomWidth: 1, borderBottomColor: c.linha, paddingVertical: 13, paddingHorizontal: 4 },
  erro: { color: c.erro, fontSize: 13, lineHeight: 21, marginTop: 16 }, demo: { paddingVertical: 21, alignItems: 'center' },
  demoTitulo: { color: c.destaque, fontSize: 12, textAlign: 'center' }, demoTexto: { color: c.apoio, fontSize: 11, marginTop: 7 },
  rodape: { color: c.apoio, textAlign: 'center', fontSize: 10, marginTop: 14 },
});
