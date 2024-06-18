import { Todo } from "../src/type/TodoType";
export function createTodo(
    id: number,
    title: string,
    description: string,
    completionStatus: boolean
): Todo {
    return {
        id,
        title,
        description,
        completionStatus
    };
}