import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
      <Stack>      
        <Stack.Screen name='newhome' />
        <Stack.Screen name='profile' />
        <Stack.Screen name='calculator' />
        <Stack.Screen name='page' />
        <Stack.Screen name='scroll' options={{ headerShown: false }}/>
      </Stack>
  );
}
