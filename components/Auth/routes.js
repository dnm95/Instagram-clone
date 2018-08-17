import { createBottomTabNavigator } from 'react-navigation';
import { Home, Search, Add, Follow, Profile } from '.';

const AuthenticatedRoutes = createBottomTabNavigator({
  Home: {
    screen: Home,
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
});

export { AuthenticatedRoutes };