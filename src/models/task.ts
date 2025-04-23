export enum TaskState {
  CREATING = "creating",
  CREATED = "created",
}

export interface Task {
  id: string;
  title: string;
  concluded?: boolean;
  state?: TaskState;
}
