import { Pressable, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';
export function AcaoPrincipal({ texto, onPress, contorno = false }: { texto: string; onPress: () => void; contorno?: boolean }) {
  return <Pressable accessibilityRole="button" accessibilityLabel={texto} onPress={onPress}
    style={({ pressed }) => [s.botao, contorno && s.contorno, pressed && { opacity: 0.75 }]}>
    <Text style={[s.texto, contorno && { color: theme.colors.destaque }]}>{texto}</Text>
    <Text accessible={false} style={[s.seta, contorno && { color: theme.colors.destaque }]}>↗</Text>
  </Pressable>;
}
const s = StyleSheet.create({
  botao: { minHeight: 56, borderRadius: 14, paddingHorizontal: 19, paddingVertical: 17, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12, backgroundColor: theme.colors.destaque },
  contorno: { backgroundColor: theme.colors.painel, borderColor: theme.colors.linha, borderWidth: 1 },
  texto: { flex: 1, color: theme.colors.fundo, fontWeight: '800', fontSize: 15 },
  seta: { color: theme.colors.fundo, fontSize: 22, lineHeight: 24 },
});
