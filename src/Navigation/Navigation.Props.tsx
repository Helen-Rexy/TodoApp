import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ITodo} from '../Types/Todos';

export type StackParamList = {
  TodoList: undefined;
  TodoDetail: ITodo;
};

export type TodoListProps = NativeStackScreenProps<StackParamList, 'TodoList'>;
export type TodoDetailProps = NativeStackScreenProps<
  StackParamList,
  'TodoDetail'
>;
