import { Text } from 'react-native';
import { Tabs } from 'expo-router';
import { theme } from '../../../theme';
export default function AbasPrincipais() {
  return <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: theme.colors.destaque,
    tabBarInactiveTintColor: theme.colors.apoio, tabBarStyle: { backgroundColor: theme.colors.fundo, borderTopColor: theme.colors.linha },
    tabBarLabelStyle: { fontSize: 11, fontWeight: '700' } }}>
    <Tabs.Screen name="index" options={{ title: 'Início', tabBarAccessibilityLabel: 'Início', tabBarIcon: ({ color }) => <Text accessible={false} style={{ color, fontSize: 24 }}>▦</Text> }} />
    <Tabs.Screen name="perfil" options={{ title: 'Perfil', tabBarAccessibilityLabel: 'Perfil', tabBarIcon: ({ color }) => <Text accessible={false} style={{ color, fontSize: 24 }}>◉</Text> }} />
  </Tabs>;
}
