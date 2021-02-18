// Tab View inside Navigation Drawer
// https://aboutreact.com/tab-view-inside-navigation-drawer-sidebar-with-react-navigation/

import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './app/home';
import Profile from './app/profile';
import Settings from './app/setting';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Profile':
      return 'Profile';
    case 'Settings':
      return 'Settings';
  }
};

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        inactiveTintColor: "gray",
        labelStyle: {
          fontSize: 20,
          paddingBottom: 10,
          textAlign: 'center',
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile'
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={TabStack}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: '#1565c0', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const SettingsStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#1565c0', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="Home"
          options={{ drawerLabel: 'Home' }}
          component={HomeStack}
        />
        <Drawer.Screen
          name="Settings"
          options={{ drawerLabel: 'Settings' }}
          component={SettingsStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
