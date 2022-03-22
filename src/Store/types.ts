import { todosReducer } from './todosReducer';
import { rootReducer } from "./rootReducer"

export enum EActionType {
    ADD_TODO = 'ADD_TODO',
    SAVE_TODO = 'SAVE_TODO',
    DELETE_TODO = 'DELETE_TODO',
    EDIT_TODO = 'EDIT_TODO',
    SAVE_EDIT_TODO = 'SAVE_EDIT_TODO',
    EDITING = 'EDITING',
    COMPLET = 'COMPLET',
    CHANGE_TODO = 'CHANGE_TODO'
};

export interface IInitState {
    todosData: TTodo[]
    editedToDo: {}
}

export type TTodo = {
    id: number,
    head: string,
    text: string,
    visibilityNewItem: boolean,
    edit: true,
    editing: boolean,
    completed: boolean
}

export type TAction = {
    type: EActionType;
    payload: TTodo[] | TTodo
}

export type RootState = any
