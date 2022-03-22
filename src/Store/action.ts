import { EActionType, TTodo } from './types';

// добавляет объект newToDo в пустой массив
export const addToDo = (newToDo: TTodo) => ({ type: EActionType.ADD_TODO, payload: newToDo });
// сохраняет в объект addToDo поле text и head, переключает edit
export const saveToDo = (text: string, head: string, data: TTodo[], toDoItem: TTodo) => {
    return (
        {
            type: EActionType.SAVE_TODO,
            payload: data.map((item: TTodo) =>
                item.id == toDoItem.id ? { ...item, edit: !item.edit, text: text, head: head } : item)
        }
    )
}
// фильтрует массив исключая из него удаяляемый объект по id
export const deledeToDo = (data: TTodo[], toDoItem: TTodo) => {
    return (
        {
            type: EActionType.DELETE_TODO,
            payload: data.filter((item: TTodo) => item.id != toDoItem.id)
        }
    )
}
// сохраняет редактируемый объект editedToDo
export const saveEditToDo = (editedToDo: TTodo) => ({ type: EActionType.SAVE_EDIT_TODO, payload: editedToDo })
// Изменяет editing и edit
export const editingToDo = (idTask: number, data: TTodo[]) => {
    return ({
        type: EActionType.EDITING,
        payload: data.map((item: TTodo) =>
            item.id == idTask ? { ...item, editing: !item.editing, edit: !item.edit } : item)
    })
}
// Сохраняет новые изменения в task 
export const ChangeToDo = (text: string, head: string, data: TTodo[], toDoItem: TTodo) => {
    return (
        {
            type: EActionType.CHANGE_TODO,
            payload: data.map((item: TTodo) =>
                item.id == toDoItem.id ? {
                    ...item, edit: !item.edit, editing: !item.editing, text: text, head: head
                } : item)
        }
    )
}
// Изменяет поле completed (выполнено задание или нет)
export const complet = (item: TTodo, data: TTodo[]) => {
    return ({
        type: EActionType.COMPLET,
        payload: data.map((item: TTodo) =>
            item.id == item.id ? { ...item, completed: !item.completed } : item)
    })
}
