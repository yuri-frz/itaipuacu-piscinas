import { Redirect, Stack } from 'expo-router';
import { useSession } from '../../context/SessionContext';
export default function AcessoLayout() {
  const { usuario } = useSession();
  if (usuario) return <Redirect href="/" />;
  return <Stack screenOptions={{ headerShown: false }} />;
}
