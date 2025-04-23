import React from "react";
import useLocalStorage from "use-local-storage";
import {delay} from "../helpers/utils";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [isCreatingTask, setIsCreatingTask] = React.useState(false);
  const [isUpdatingTask, setIsUpdatingTask] = React.useState(false);

  async function createTask(payload) {
    setIsCreatingTask(true);
    await delay(100);

    const id = Math.random().toString(36).substring(2, 9);
    setTasks([...tasks, {id, ...payload}]);

    setIsCreatingTask(false);
  }

  async function updateTask(id, payload) {
    setIsUpdatingTask(true);

    await delay(1000);

    setTasks(
      tasks.map((task) => (task.id === id ? {...task, ...payload} : task))
    );

    setIsUpdatingTask(false);
  }

  function updateTaskStatus(id, concluded) {
    setTasks(
      tasks.map((task) => (task.id === id ? {...task, concluded} : task))
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return {
    createTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
    isCreatingTask,
    isUpdatingTask,
  };
}
