import { Stack, useLocalSearchParams } from 'expo-router';
import Drawer from 'expo-router/drawer';

export const IdStackLayout: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <>
      <Drawer.Screen options={{ title: `[id] of ${id}` }} />
      <Stack>
        <Stack.Screen name="page1" />
        <Stack.Screen name="page2" />
      </Stack>
    </>
  );
};
export default IdStackLayout;
