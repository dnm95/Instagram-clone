import { createStackNavigator } from 'react-navigation';
import { Home, Profile, Publication, Comments } from '.';

const StackHome = createStackNavigator({
    Home: {
        screen: Home,
    },
    Author: {
        screen: Profile,
    },
    Publication: {
        screen: Publication,
    },
    Comments: {
        screen: Comments,
    }
});

export { StackHome };