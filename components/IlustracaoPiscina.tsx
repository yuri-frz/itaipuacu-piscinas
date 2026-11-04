import { View, StyleSheet } from 'react-native';
import type { Formato } from '../domain/projetos';
import { theme } from '../theme';

// Ilustração decorativa em componentes nativos. Não depende de imagens ou de internet.
export function IlustracaoPiscina({ formato = 'retangular', pequena = false }: { formato?: Formato; pequena?: boolean }) {
  const curva = formato === 'organica' ? 48 : formato === 'spa' ? 35 : 12;
  return <View accessible={false} accessibilityElementsHidden importantForAccessibility="no-hide-descendants"
    style={[s.area, { height: pequena ? 122 : 240 }]}>
    <View style={s.jardim}><View style={s.folha} /><View style={[s.folha, s.folhaDois]} /></View>
    <View style={[s.deck, pequena && { padding: 11 }, formato === 'raia' && { height: '58%' }]}>
      <View style={[s.agua, { borderRadius: curva }, formato === 'spa' && { width: '74%', alignSelf: 'center' }]}>
        {[16, 34, 52, 70, 88].map(top => <View key={top} style={[s.linha, { top: `${top}%` }]} />)}
        {[18, 39, 60, 81].map(left => <View key={left} style={[s.coluna, { left: `${left}%` }]} />)}
        <View style={s.reflexo} />
        <View style={s.escada}>{[0, 1, 2].map(n => <View key={n} style={s.degrau} />)}</View>
        <View style={[s.anel, pequena && { width: 22, height: 22, borderWidth: 5 }]} />
      </View>
    </View>
    <View style={[s.espreguicadeira, pequena && { width: 20, height: 42 }]} />
  </View>;
}
const c = theme.colors;
const s = StyleSheet.create({
  area: { backgroundColor: c.elevado, borderRadius: 20, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },
  deck: { width: '86%', height: '78%', padding: 18, backgroundColor: c.areia, borderRadius: 23, transform: [{ rotate: '-7deg' }] },
  agua: { flex: 1, backgroundColor: c.agua, borderWidth: 3, borderColor: c.aguaClara, overflow: 'hidden' },
  linha: { position: 'absolute', left: 0, right: 0, height: 1, backgroundColor: c.grade, opacity: 0.7 },
  coluna: { position: 'absolute', top: 0, bottom: 0, width: 1, backgroundColor: c.grade, opacity: 0.7 },
  reflexo: { position: 'absolute', width: '30%', height: '160%', left: '28%', top: '-30%', backgroundColor: c.brilho, opacity: 0.15, transform: [{ rotate: '28deg' }] },
  escada: { position: 'absolute', left: 0, top: 0, width: '22%', gap: 4, padding: 5 },
  degrau: { backgroundColor: c.degrau, height: 4, borderRadius: 2, opacity: 0.85 },
  anel: { position: 'absolute', right: '20%', bottom: '20%', width: 34, height: 34, borderRadius: 30, borderWidth: 7, borderColor: c.amarelo, transform: [{ rotate: '15deg' }] },
  jardim: { position: 'absolute', left: -15, top: -12 }, folha: { width: 60, height: 26, borderRadius: 30, backgroundColor: c.grade, transform: [{ rotate: '35deg' }] },
  folhaDois: { transform: [{ rotate: '75deg' }], marginLeft: 20, marginTop: -5 },
  espreguicadeira: { position: 'absolute', right: 9, bottom: 13, width: 28, height: 64, borderRadius: 7, borderWidth: 3, borderColor: c.fundo, backgroundColor: c.amarelo, transform: [{ rotate: '-7deg' }] },
});
