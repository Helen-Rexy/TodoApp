import firestore from '@react-native-firebase/firestore';
// import {ITodo} from '../Types/Todos';

const ref = firestore().collection('todos');

export const addTodoService = async newTodo => {
  try {
    await ref.add({...newTodo});
  } catch (error) {
    console.log(error);
  }
};

export const getTodosService = async (functionCallback: (data) => void) => {
  try {
    await ref.onSnapshot({
      next: querySnapshot => {
        const list: any[] = [];
        querySnapshot.docs.forEach(doc => {
          const {task, completed} = doc.data();
          list.push({
            id: doc.id,
            task,
            completed,
          });
        });
        if (functionCallback) {
          functionCallback(list);
        }
      },
    });
  } catch (error) {
    console.log('🐳 Helen 🍄 -- getTodosService -- error:', error);
    return {
      success: false,
      data: [],
    };
  }
};

export const updateTodoService = async ({id, task, completed}) => {
  try {
    await ref.doc(id).set({task: task, completed: completed}, {merge: true});
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodoService = async id => {
  try {
    await ref.doc(id).delete();
  } catch (error) {
    console.log(error);
  }
};
