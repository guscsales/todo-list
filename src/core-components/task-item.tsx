import React from "react";
import {cx} from "class-variance-authority";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import ButtonIcon from "../components/button-icon";
import useTask from "../hooks/use-task";
import Skeleton from "../components/skeleton";
import InputText from "../components/input-text";
import {Task} from "../models/task";

interface TaskItemProps extends React.ComponentProps<"form"> {
  task: Task;
  loading?: boolean;
}

export default function TaskItem({task, loading, ...props}: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(task?.state === "creating");
  const [taskTitle, setTaskTitle] = React.useState(task?.title || "");
  const {isUpdatingTask, updateTaskStatus, deleteTask, updateTask} = useTask();

  function handleUpdateTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;
    updateTaskStatus(task.id, checked);
  }

  function handleDeleteTask() {
    deleteTask(task.id);
  }

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    if (task?.state === "creating") {
      deleteTask(task?.id);
    }

    setIsEditing(false);
  }

  async function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await updateTask(task?.id, {title: taskTitle});
    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value);
  }

  return (
    <form onSubmit={handleSaveTask} {...props}>
      <Card size="md" className="flex items-center justify-between gap-4">
        {!isEditing ? (
          <>
            <InputCheckbox
              value={task?.concluded?.toString()}
              checked={task?.concluded}
              loading={loading}
              onChange={handleUpdateTaskStatus}
            />

            {!loading ? (
              <Text
                className={cx("flex-1", {
                  "line-through": task?.concluded,
                })}
              >
                {task?.title}
              </Text>
            ) : (
              <Skeleton className="flex-1 h-5" />
            )}
          </>
        ) : (
          <InputText
            value={taskTitle}
            onChange={handleChangeTaskTitle}
            className="flex-1"
            disabled={isUpdatingTask}
            required
            autoFocus
          />
        )}

        <div className="flex items-center gap-1">
          {!isEditing ? (
            <>
              <ButtonIcon
                type="button"
                icon={TrashIcon}
                loading={loading}
                size="sm"
                variant="tertiary"
                onClick={handleDeleteTask}
              />
              <ButtonIcon
                type="button"
                icon={PencilIcon}
                loading={loading}
                size="sm"
                variant="tertiary"
                onClick={handleEditTask}
                key="edit-task"
              />
            </>
          ) : (
            <>
              <ButtonIcon
                type="button"
                icon={XIcon}
                size="sm"
                variant="secondary"
                onClick={handleExitEditTask}
              />
              <ButtonIcon
                icon={CheckIcon}
                size="sm"
                variant="primary"
                handling={isUpdatingTask}
                key="save-task"
              />
            </>
          )}
        </div>
      </Card>
    </form>
  );
}
