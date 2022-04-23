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
    SAVE_TD = 'SAVE_TD',
    CLEAR_TO_DO = 'CLEAR_TO_DO',
    ADDING_USER = 'ADDING_USER',
    REMOVE_USER = 'REMOVE_USER',
    VERIFICATION = 'VERIFICATION',
    LOG_OFF = 'LOG_OFF',
    SAVE_USER = 'SAVE_USER'
};

export interface IInitState {
    todosData: TTodo[]
    editedToDo: {}
    itemId: TTodo | {}
    userVerification: [boolean] | []
    userList: []
    user: {}
}

export type TTodo = {
    id: number,
    user: string,
    head: string,
    text: string,
    visibilityNewItem: boolean,
    edit: true,
    editing: boolean,
    completed: boolean,
    visible: boolean,
    date: string,
    time: string
}

export type TAction = {
    type: EActionType;
    payload: TTodo[] | TTodo
}

export type TDataRegForm = {
    firstName: string,
    email: string,
    age: number,
    password: string,
    confirmPassword: string
};

export type TVerification = {
    email: string,
    password: string
}

