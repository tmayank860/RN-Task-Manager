import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Dashboard/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({route}) => ({
          headerShown: false,
        })}
      />
      {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </HomeStack.Navigator>
  );
}
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({route}) => ({
          headerShown: false,
        })}
      />
    </ProfileStack.Navigator>
  );
}

const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            // You can return any component that you like here!
            return (
              <FontAwesomeIcon
                name="home"
                size={focused ? 26 : 24}
                color={focused ? '#0f3a57ff' : 'gray'}
              />
            );
          },
          tabBarActiveTintColor: '#0f3a57ff',
          tabBarInactiveTintColor: 'gray',
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            // You can return any component that you like here!
            return (
              <FontAwesomeIcon
                name="user-circle-o"
                size={focused? 26 : 24}
                color={focused ? '#0f3a57ff' : 'gray'}
              />
            );
          },
          tabBarActiveTintColor: '#0f3a57ff',
          tabBarInactiveTintColor: 'gray',
        })}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="TabStack"
          options={({route, navigation}) => ({
            headerShown: false,
          })}
          component={MyTabs}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
