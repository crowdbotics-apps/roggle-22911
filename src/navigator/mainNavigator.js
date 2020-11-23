import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile177855Navigator from '../features/UserProfile177855/navigator';
import Maps177836Navigator from '../features/Maps177836/navigator';
import Settings177814Navigator from '../features/Settings177814/navigator';
import Settings177799Navigator from '../features/Settings177799/navigator';
import NotificationList177798Navigator from '../features/NotificationList177798/navigator';
import Maps177797Navigator from '../features/Maps177797/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile177855: { screen: UserProfile177855Navigator },
Maps177836: { screen: Maps177836Navigator },
Settings177814: { screen: Settings177814Navigator },
Settings177799: { screen: Settings177799Navigator },
NotificationList177798: { screen: NotificationList177798Navigator },
Maps177797: { screen: Maps177797Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
