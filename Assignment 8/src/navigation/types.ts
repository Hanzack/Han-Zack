import { Task } from '../types';

export type RootStackParamList = {
  Home: undefined;
  TaskDetail: { taskId: string };
  AddTask: { editTask?: Task };
  Timer: { taskId?: string };
  Settings: undefined;
};

export type BottomTabParamList = {
  Tasks: undefined;
  Timer: undefined;
  Settings: undefined;
};