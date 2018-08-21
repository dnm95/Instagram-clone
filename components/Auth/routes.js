import { createBottomTabNavigator } from 'react-navigation';
import { StackHome } from './StackHome';
import { Search, Add, Follow, Profile } from '.';

const AuthenticatedRoutes = createBottomTabNavigator(
  {
    Home: {
      screen: StackHome,
    },
    Search: {
      screen: Search,
    },
    Add: {
      screen: Add,
    },
    Follow: {
      screen: Follow,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    tabBarPosition: 'bottom',
  }
);

export { AuthenticatedRoutes };