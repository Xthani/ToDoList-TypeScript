import { EActionType, IInitState, TAction } from './types';

let INIT_STATE: IInitState = {
    todosData: [],
    editedToDo: {},
    itemId: {},
    user: {}
}

export const todosReducer = (state: IInitState = INIT_STATE, action: TAction) => {
    switch (action.type) {
        case EActionType.ADD_TODO:
            return { ...state, todosData: [...state.todosData, action.payload] }
        case EActionType.SAVE_TODO:
        case EActionType.DELETE_TODO:
        case EActionType.EDITING:
        case EActionType.COMPLET:
        case EActionType.CHANGE_TODO:
        case EActionType.VISIBLE_EDIT_FORM:
        // case EActionType.VISIBLE_EDIT_FORM_2:
        case EActionType.CLEAR_TO_DO:
            return { ...state, todosData: action.payload }
        case EActionType.SAVE_EDIT_TODO:
            return { ...state, editedToDo: action.payload }
        case EActionType.SAVE_TD:
            return { ...state, itemId: action.payload }
        case EActionType.ADDING_USER:
        case EActionType.REMOVE_USER:
            return { ...state, user: action.payload }
        default:
            return state;
    }
}