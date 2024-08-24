import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  filters: {
    status: "",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/add":
      return {
        ...state,
        contacts: { items: [...state.contacts.items, action.payload] },
      };
    case "contacts/delete":
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            (item) => item.id !== action.payload
          ),
        },
      };
    case "filters/setFilter": {
      return {
        ...state,
        filters: { status: action.payload },
      };
    }
    default:
      return state;
  }
};

export const addContact = (contact) => {
  return {
    type: "contacts/add",
    payload: contact,
  };
};

export const deleteContact = (id) => {
  return {
    type: "contacts/delete",
    payload: id,
  };
};
export const setFilter = (value) => {
  return {
    type: "filters/setFilter",
    payload: value,
  };
};

export const store = configureStore({ reducer: rootReducer });
