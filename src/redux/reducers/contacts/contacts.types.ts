export interface ContactState {
  contacts: Array<any>;
  loading: boolean;
  error: null | string;
}

export enum ContactActionTypes {
  FETCH_CONTACTS = 'FETCH_CONTACTS',
  FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
  FETCH_CONTACTS_ERRORS = 'FETCH_CONTACTS_ERRORS'
}

export interface FetchContactsAction {
  type: ContactActionTypes.FETCH_CONTACTS;
}

interface FetchContactsSuccessAction {
  type: ContactActionTypes.FETCH_CONTACTS_SUCCESS;
  payload: any[];
}

interface FetchContactsErrorAction {
  type: ContactActionTypes.FETCH_CONTACTS_ERRORS;
  payload: string;
}

export type ContactAction = FetchContactsAction | FetchContactsSuccessAction | FetchContactsErrorAction;
