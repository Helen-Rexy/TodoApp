import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const ListTodo = ({
  todo,
  markTodoComplete,
  deleteTodo,
}: {
  todo: any;
  markTodoComplete: any;
  deleteTodo: any;
}) => {
  return (
    <View style={styles.listItem}>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 16,
            color: '#79AC78',
            textDecorationLine: todo?.completed ? 'line-through' : 'none',
          }}>
          {todo?.task}
        </Text>
      </View>
      {!todo?.completed && (
        <TouchableOpacity onPress={() => markTodoComplete(todo)}>
          <View style={[styles.iconAction, {backgroundColor: '#3876BF'}]}>
            <Icon name="done" size={20} color="white" />
          </View>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
        <View style={styles.iconAction}>
          <Icon name="delete" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListTodo;
