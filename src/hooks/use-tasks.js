import React from "react";
import useLocalStorage from "use-local-storage";
import {delay} from "../helpers/utils";

export default function useTasks() {
  const [tasksData] = useLocalStorage("tasks", []);
  const [tasks, setTasks] = React.useState(tasksData);
  const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);

  const fetchTasks = React.useCallback(async () => {
    if (isLoadingTasks) {
      console.log("Carregando tarefas...");

      /* 
        Simulação de requisição, espera 3 segundos
        para retornar as tarefas
      */
      await delay(1);

      console.log("Tarefas carregadas!");
    }
    setIsLoadingTasks(false);
    return setTasks(tasksData);
  }, [isLoadingTasks, tasksData]);

  React.useEffect(() => {
    fetchTasks();
  }, [tasksData, fetchTasks]);

  return {
    tasks,
    tasksCount: tasks.length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks,
  };
}
