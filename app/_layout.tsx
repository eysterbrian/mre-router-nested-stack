import { useReactNavigationDevTools } from '@dev-plugins/react-navigation';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { router, useNavigationContainerRef } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

export const RootDrawerLayout: React.FC = () => {
  const navigationRef = useNavigationContainerRef();
  useReactNavigationDevTools(navigationRef);

  return (
    <Drawer
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />

          {['A', 'B'].map((id) => (
            <DrawerItem
              key={id}
              label={String(id)}
              onPress={() => {
                router.navigate(`/${id}/page1`);
              }}
            />
          ))}
        </DrawerContentScrollView>
      )}>
      <Drawer.Screen name="[id]" />
    </Drawer>
  );
};
export default RootDrawerLayout;
