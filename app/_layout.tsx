import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SessionProvider } from '../context/SessionContext';
import { theme } from '../theme';
export default function RootLayout() {
  return <SessionProvider><StatusBar style="light" /><Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: theme.colors.fundo } }} /></SessionProvider>;
}
