import { Redirect, Stack } from 'expo-router';
import { useSession } from '../../context/SessionContext';
import { theme } from '../../theme';
export const unstable_settings = { initialRouteName: '(tabs)' };
export default function AreaProtegida() {
  const { usuario } = useSession();
  // A verificação fica no grupo: cobre tanto as abas quanto qualquer detalhe.
  if (!usuario) return <Redirect href="/login" />;
  return <Stack screenOptions={{ headerStyle: { backgroundColor: theme.colors.fundo }, headerTintColor: theme.colors.destaque,
    headerTitleStyle: { fontWeight: '700' }, contentStyle: { backgroundColor: theme.colors.fundo }, headerShadowVisible: false }}>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="projeto/[id]" options={{ title: 'Conheça o modelo' }} />
  </Stack>;
}
