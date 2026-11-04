import { View, Text } from 'react-native';
import { Link, Stack } from 'expo-router';
import { theme } from '../theme';
export default function NaoEncontrada() {
  return <View style={{ flex: 1, padding: 28, justifyContent: 'center', gap: 20, backgroundColor: theme.colors.fundo }}>
    <Stack.Screen options={{ title: 'Caminho não encontrado' }} />
    <Text style={{ color: theme.colors.texto, fontSize: 30, fontWeight: '700' }}>Vamos voltar à superfície?</Text>
    <Text style={{ color: theme.colors.apoio, fontSize: 16 }}>Esse endereço não faz parte do nosso catálogo.</Text>
    <Link href="/" replace style={{ color: theme.colors.destaque, fontSize: 16 }}>Ir para o início →</Link>
  </View>;
}
