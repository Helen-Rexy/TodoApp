import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TodoList} from '../Screens';
import TodoDetailContainer from '../Screens/TodoDetail';
import PATH_NAME from '../Constanst/PathNameNavigation';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={PATH_NAME.TodoList}>
        <Stack.Screen
          name={PATH_NAME.TodoList}
          component={TodoList}
          options={{title: 'My Todos'}}
        />
        <Stack.Screen
          name={PATH_NAME.TodoDetail}
          component={TodoDetailContainer}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
