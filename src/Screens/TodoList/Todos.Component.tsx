import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button, CheckBox} from '@rneui/themed';

import styles from './TodoList.Styles';

const TodosComponent = ({
  todo,
  markTodoComplete,
  deleteTodo,
  editTodo,
}: {
  todo: any;
  markTodoComplete: any;
  deleteTodo: any;
  editTodo: any;
}) => {
  return (
    <View style={styles.listItemContainer}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignSelf: 'flex-end',
          alignItems: 'center',
        }}>
        <Button radius={'sm'} type="clear" onPress={() => deleteTodo(todo.id)}>
          <Icon name="clear" size={22} />
        </Button>
      </View>
      <View style={styles.listItem}>
        <CheckBox
          checked={todo.completed}
          onPress={() => markTodoComplete(todo)}
          containerStyle={{backgroundColor: '#f5f5f5', padding: 0}}
        />
        <View style={{flex: 1}}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 16,
              color: '#000',
              textDecorationLine: todo?.completed ? 'line-through' : 'none',
            }}>
            {todo?.task}
          </Text>
        </View>
        <Button
          //   style={{padding: 1}}
          radius={'sm'}
          type="outline"
          onPress={() => editTodo()}>
          {/* <Icon name="mode-edit" size={18} /> */}
          <Text>Edit</Text>
        </Button>
      </View>
    </View>
  );
};

export default TodosComponent;
