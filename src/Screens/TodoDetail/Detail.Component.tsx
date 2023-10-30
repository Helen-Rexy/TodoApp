import React from 'react';
import {View} from 'react-native';
import {Input, Switch, Text} from '@rneui/themed';

import styles from './TodoDetail.Styles';
import {ITodo} from '../../Types/Todos';
import TakePhoto from './TakePhoto';

const DetailComponent = ({state, setState}: {state: ITodo; setState: any}) => {
  const onChangeContentTask = (text: string) => {
    setState((prev: any) => ({...prev, task: text}));
  };
  const onMarkDone = (value: boolean) => {
    setState((prev: any) => ({...prev, completed: value}));
  };
  return (
    <View style={styles.bodyContainer}>
      <View>
        <Text style={{fontSize: 18}}>Description</Text>
        <Input
          value={state.task}
          placeholder="Enter new task here"
          onChangeText={text => onChangeContentTask(text)}
          style={{color: '#000', height: 50, fontSize: 14}}
        />
      </View>
      <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
        <Text style={{fontSize: 18}}>Completed</Text>
        <Switch value={state.completed} onValueChange={onMarkDone} />
      </View>
      <TakePhoto state={state} setState={setState} />
    </View>
  );
};

export default DetailComponent;
