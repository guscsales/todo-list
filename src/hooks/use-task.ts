import React from "react";
import useLocalStorage from "use-local-storage";
import {delay} from "../helpers/utils";
import {Task, TaskState} from "../models/task";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [isCreatingTask, setIsCreatingTask] = React.useState(false);
  const [isUpdatingTask, setIsUpdatingTask] = React.useState(false);

  async function createTask(payload: {title: Task["title"]}) {
    setIsCreatingTask(true);
    await delay(100);

    const id = Math.random().toString(36).substring(2, 9);
    setTasks([...tasks, {...payload, id, state: TaskState.CREATING}]);

    setIsCreatingTask(false);
  }

  async function updateTask(id: string, payload: {title: Task["title"]}) {
    setIsUpdatingTask(true);

    await delay(1000);

    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task, state: TaskState.CREATED, ...payload} : task
      )
    );

    setIsUpdatingTask(false);
  }

  function updateTaskStatus(id: string, concluded: boolean) {
    setTasks(
      tasks.map((task) => (task.id === id ? {...task, concluded} : task))
    );
  }

  function deleteTask(id: string) {
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
