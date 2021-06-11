import { Dispatch } from "redux";
import {ContactAction, ContactActionTypes} from "./contacts.types";
import axios from "axios";

const fetchContacts = (): ContactAction => {
  return {type: ContactActionTypes.FETCH_CONTACTS}
}

const fetchContactsSuccess = (payload: any): ContactAction => {
  return {
    type: ContactActionTypes.FETCH_CONTACTS_SUCCESS,
    payload
  }
}

const fetchContactsError = (err: string): ContactAction => {
  return {
    type: ContactActionTypes.FETCH_CONTACTS_ERRORS,
    payload:  `Произошла ошибка при загрузке контактов: ${err}`
  }
}

export const getContacts = () => async (dispatch: Dispatch<ContactAction>) => {
  try {
    dispatch(fetchContacts())
    const response = await axios.get('https://randomuser.me/api/?results=50')
    dispatch(fetchContactsSuccess(response.data.results))
  } catch(err) {
    dispatch(fetchContactsError(err))
  }
}
