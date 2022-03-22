import { EActionType, IInitState, TAction } from './types';

let INIT_STATE: IInitState = {
    todosData: [],
    editedToDo: {}
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
            return { ...state, todosData: action.payload }
        case EActionType.SAVE_EDIT_TODO:
            return { ...state, editedToDo: action.payload }
        default:
            return state;
    }
}