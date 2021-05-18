import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleSetDarkMode() {
    setDarkMode(!darkMode);
  }

  function handleAddTask(newTaskTitle: string) {
    if (!newTaskTitle) return;

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks([...tasks, newTask]);
  }

  function handleMarkTaskAsDone(id: number) {
    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex >= 0) {
      const updatedTasks = tasks;

      updatedTasks[taskIndex].done = !tasks[taskIndex].done;

      setTasks([...updatedTasks]);
    }
  }

  function handleRemoveTask(id: number) {
    const updatedTasks = tasks.filter(task => task.id !== id);

    setTasks(updatedTasks);
  }

  return (
    <>
      <View style={darkMode ? [styles.container, styles.containerDark] : styles.container}>
        <Header darkMode={darkMode} onPress={handleSetDarkMode} />

        <TodoInput addTask={handleAddTask} darkMode={darkMode} />

        <MyTasksList 
          darkMode={darkMode}
          tasks={tasks} 
          onPress={handleMarkTaskAsDone} 
          onLongPress={handleRemoveTask} 
          />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerDark: {
    backgroundColor: '#10101e'
  }
})