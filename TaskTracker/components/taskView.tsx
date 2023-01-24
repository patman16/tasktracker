import React from 'react';
import {
  ScrollView,
    Text,
    View
  } from 'react-native';

type TaskListProps = {
  tasks: string[]
};

export default class TaskView extends React.Component<TaskListProps> {
  render() {
    let taskList = this.props.tasks.map((val : string) => {
      return <Text>{val}</Text>
    });

    return (
        <ScrollView>
          <Text>Tasks</Text>
          { taskList }
        </ScrollView>
      );
    }
  }