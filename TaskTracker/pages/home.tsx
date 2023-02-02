import React from 'react';
import {
    TextInput,
    View
  } from 'react-native';
import TaskView from '../components/taskView';

export default class HomeScreen extends React.Component {
    state: {
        tasks: string[]
    }

    constructor(props: any) {
        super(props);
        this.state = {
          tasks: []
        };
    }

    render() {
        const addTask = (taskName: string) => {
            this.setState((state: any, props: any) => {
                return { tasks: [...state.tasks, taskName] };
            })
        }

        return (
            <View>
                <TextInput placeholder='Add task here' onSubmitEditing={(event) => addTask(event.nativeEvent.text)}></TextInput>
                <TaskView tasks={this.state.tasks}></TaskView>
            </View>
        );
    }
}