import { createStateContext } from "react-use";

import Task from "../../interfaces/ITask";

export const [useTasks, SharedTasksProvider] = createStateContext<Task[]>([]);
