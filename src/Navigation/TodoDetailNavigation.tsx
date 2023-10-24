import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import PATH_NAME from '../Constanst/PathNameNavigation';
import TodoDetailContainer from '../Screens/TodoDetail';

const Stack = createNativeStackNavigator();

const TodoDetailNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PATH_NAME.TodoDetail}
        component={TodoDetailContainer}
        options={{headerLargeTitle: true}}
      />
    </Stack.Navigator>
  );
};

export default TodoDetailNavigator;
