export enum EActionType {
    ADD_TODO = 'ADD_TODO',
    SAVE_TODO = 'SAVE_TODO',
    DELETE_TODO = 'DELETE_TODO',
    EDIT_TODO = 'EDIT_TODO',
    SAVE_EDIT_TODO = 'SAVE_EDIT_TODO',
    EDITING = 'EDITING',
    COMPLET = 'COMPLET',
    CHANGE_TODO = 'CHANGE_TODO',
    VISIBLE_EDIT_FORM = 'VISIBLE_EDIT_FORM',
    SAVE_TD = 'SAVE_TD'
};

export interface IInitState {
    todosData: TTodo[]
    editedToDo: {}
    item: TTodo | {}
}

export type TTodo = {
    id: number,
    head: string,
    text: string,
    visibilityNewItem: boolean,
    edit: true,
    editing: boolean,
    completed: boolean,
    visible: boolean
}

export type TAction = {
    type: EActionType;
    payload: TTodo[] | TTodo
}

export type RootState = any
