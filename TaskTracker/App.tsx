/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  useColorScheme,
  TextInput,
  View
} from 'react-native';

import TaskView from './components/taskView';

type TaskState = {
  tasks: string[]
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [tasks, setTasks] = useState<string[]>([]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  function addTask(taskName: string) {
    setTasks(oldArray => [...oldArray, taskName]);
  }

  return (
    <View>
      <TextInput placeholder='Add task here' onSubmitEditing={(event) => addTask( event.nativeEvent.text)}></TextInput>
      <TaskView tasks={tasks}></TaskView>
    </View>
  );
}

export default App;
