import {ContactAction, ContactActionTypes, ContactState} from "./contacts.types";
import {getRandomID} from "../../../utils/utils";

const initialState: ContactState = {
  contacts: [],
  loading: false,
  error: null
}

export const contactsReducer = (state = initialState, action: ContactAction): ContactState => {
  switch (action.type) {
    case ContactActionTypes.FETCH_CONTACTS:
      return {
        loading: true,
        error: null,
        contacts: []
      }

    case ContactActionTypes.FETCH_CONTACTS_SUCCESS:
      return {
        loading: false,
        error: null,
        contacts: action.payload.map(contact => {
          contact.key = getRandomID();
          return contact;
        })
      }

    case ContactActionTypes.FETCH_CONTACTS_ERRORS:
      return {
        loading: false,
        error: action.payload,
        contacts: []
      }

    default:
      return state
  }
}
