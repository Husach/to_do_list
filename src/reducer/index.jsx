// constants
import { ACTIONS } from "../constants";

const initialState = {
  data: [],
  editableObj: {
    title: "",
    text: "",
    type: {
      value: "3",
      label: "Нормально"
    },
    date: new Date()
  },
  elementWidth: 250,
  modalIsOpen: false,
  objForDeleting: {},
  local: {
    value: "UA",
    label: "Українська"
  },
  theme: "white",
  sort: {
    value: "sort_abc",
    label: "По алфавиту"
  }
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.INITIAL_DATA:
    case ACTIONS.UPDATE_DATA:
      return {
        ...state,
        data: action.payload
      };

    case ACTIONS.ADD_ITEM_DATA:
      return {
        ...state,
        data: [...state.data, action.payload]
      };

    case ACTIONS.SET_EDITABLE_OBJ:
      return {
        ...state,
        editableObj: action.payload
      };

    case ACTIONS.UPDATE_EDITABLE_OBJ:
      return {
        ...state,
        editableObj: {
          ...state.editableObj,
          [action.payload.field]: action.payload.value
        }
      };

    case ACTIONS.SET_OBJ_FOR_DELETING:
      return {
        ...state,
        objForDeleting: action.payload
      };

    case ACTIONS.CHANGE_ITEM_WIDTH:
      return {
        ...state,
        elementWidth: action.payload
      };

    case ACTIONS.CHANGE_SORT:
      return {
        ...state,
        sort: action.payload
      };

    case ACTIONS.CHANGE_LOCAL:
      return {
        ...state,
        local: action.payload
      };

    case ACTIONS.CHANGE_MODAL_STATE:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen
      };

    case ACTIONS.SWITCH_THEME:
      return {
        ...state,
        theme: action.payload
      };

    case ACTIONS.CLEAR_OBJ_FOR_DELETING:
      return {
        ...state,
        objForDeleting: initialState.objForDeleting
      };

    case ACTIONS.CLEAR_EDITABLE_OBJ:
      return {
        ...state,
        editableObj: initialState.editableObj
      };

    default:
      return state;
  }
}
