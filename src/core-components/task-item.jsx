import React from "react";
import cn from "classnames";
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

export default function TaskItem({
  id,
  title,
  concluded,
  loading,
  editing = false,
  ...props
}) {
  const [isEditing, setIsEditing] = React.useState(editing);
  const [taskTitle, setTaskTitle] = React.useState(title || "");
  const {
    isUpdatingTask,
    isDeletingTask,
    updateTaskStatus,
    deleteTask,
    updateTask,
  } = useTask();

  function handleUpdateTaskStatus(e) {
    const checked = e.target.checked;
    updateTaskStatus(id, checked);
  }

  async function handleDeleteTask() {
    await deleteTask(id);
  }

  function handleToggleEditTask() {
    setIsEditing((prev) => !prev);
  }

  async function handleSaveTask(e) {
    e.preventDefault();
    await updateTask(id, {title: taskTitle});
    setIsEditing(false);
  }

  function handleChangeTaskTitle(e) {
    setTaskTitle(e.target.value);
  }

  return (
    <Card
      as="form"
      size="md"
      className="flex items-center justify-between gap-4"
      onSubmit={handleSaveTask}
      {...props}
    >
      {!isEditing ? (
        <>
          <InputCheckbox
            value={concluded}
            checked={concluded}
            loading={loading}
            onChange={handleUpdateTaskStatus}
          />

          {!loading ? (
            <Text
              className={cn("flex-1", {
                "line-through": concluded,
              })}
            >
              {title}
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
          disabled={isUpdatingTask || isDeletingTask}
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
              handling={isDeletingTask}
            />
            <ButtonIcon
              type="button"
              icon={PencilIcon}
              loading={loading}
              size="sm"
              variant="tertiary"
              onClick={handleToggleEditTask}
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
              onClick={handleToggleEditTask}
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
  );
}
