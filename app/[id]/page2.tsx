import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export const Page2: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Stack.Screen options={{ title: `Page2 ${id}` }} />
      <Link href="./page1">Goto Page1</Link>
    </View>
  );
};
export default Page2;
