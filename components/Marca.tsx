import { Text, View, StyleSheet } from 'react-native';
import { theme } from '../theme';
export function Marca() {
  return <View style={s.marca}><View style={s.sinal}><Text style={s.onda}>≈</Text></View>
    <View><Text style={s.local}>ITAIPUAÇU</Text><Text style={s.nome}>P I S C I N A S</Text></View>
  </View>;
}
const s = StyleSheet.create({
  marca: { flexDirection: 'row', gap: 10, alignItems: 'center' },
  sinal: { width: 44, height: 44, borderRadius: 14, backgroundColor: theme.colors.destaque, alignItems: 'center', justifyContent: 'center' },
  onda: { color: theme.colors.fundo, fontSize: 32, lineHeight: 34, fontWeight: '700' },
  local: { color: theme.colors.texto, fontSize: 14, fontWeight: '800', letterSpacing: 1.5 },
  nome: { color: theme.colors.destaque, fontSize: 8, fontWeight: '700', marginTop: 4 },
});
