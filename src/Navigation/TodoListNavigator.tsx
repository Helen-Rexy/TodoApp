import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import PATH_NAME from '../Constanst/PathNameNavigation';
import {TodoList} from '../Screens';

const Stack = createNativeStackNavigator();

const TodoListNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PATH_NAME.TodoList}
        component={TodoList}
        options={{headerLargeTitle: true}}
      />
    </Stack.Navigator>
  );
};

export default TodoListNavigator;
