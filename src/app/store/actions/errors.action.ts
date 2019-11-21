import { Action } from '@ngrx/store';

export enum ErrorActionsTypes {
    ADD_ERROR = '[ERROR] Add Error',
    REMOVE_ERROR = '[ERROR] Remove Error'  
}

export class AddError implements Action{
    readonly type = ErrorActionsTypes.ADD_ERROR;

    constructor(public payload: any){}

}

export class RemoveError{
    readonly type = ErrorActionsTypes.REMOVE_ERROR;

    constructor(){}
}

export type Action = AddError | RemoveError;