import {cx} from "class-variance-authority";
import Badge from "../components/badge";
import Text from "../components/text";
import TaskItem from "./task-item";
import useTasks from "../hooks/use-tasks";
import Button from "../components/button";
import PlusIcon from "../assets/icons/plus.svg?react";
import useTask from "../hooks/use-task";
import {Task, TaskState} from "../models/task";

export default function TaskList({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const {tasks, tasksCount, concludedTasksCount, isLoadingTasks} = useTasks();
  const {createTask, isCreatingTask} = useTask();

  async function handleCreateTask() {
    await createTask({title: ""});
  }

  return (
    <article className={cx("space-y-6", className)} {...props}>
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Text variant="body-sm-bold" className="text-gray-300">
            Tarefas
          </Text>
          <Badge variant="secondary" loading={isLoadingTasks}>
            {tasksCount}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Text variant="body-sm-bold" className="text-gray-300">
            Concluídas
          </Text>
          <Badge loading={isLoadingTasks}>
            {tasksCount > 0 && `${concludedTasksCount} de `}
            {tasksCount}
          </Badge>
        </div>
      </header>
      <section className="mt-6">
        <Button
          icon={PlusIcon}
          className="w-full"
          onClick={handleCreateTask}
          handling={isCreatingTask}
          disabled={tasks.some((task) => task.state === TaskState.CREATING)}
        >
          Nova tarefa
        </Button>
      </section>
      {!isLoadingTasks && tasksCount > 0 && (
        <section className="space-y-2">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </section>
      )}
      {isLoadingTasks && (
        <section className="space-y-2">
          <TaskItem task={{} as Task} loading />
          <TaskItem task={{} as Task} loading />
          <TaskItem task={{} as Task} loading />
        </section>
      )}
    </article>
  );
}
