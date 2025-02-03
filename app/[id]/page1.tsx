import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { View } from 'react-native';

export const Page1Screen: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Stack.Screen options={{ title: `Page1 ${id}` }} />
      <Link href="./page2">Goto Page2</Link>
    </View>
  );
};
export default Page1Screen;
