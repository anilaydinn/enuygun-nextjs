import { SET_EMPLOYEES, GET_EMPLOYE, INCREMENT_EMPLOYE_VOTE } from "./types";

export const setEmployees = (employees) => async (dispatch) => {
  dispatch({
    type: SET_EMPLOYEES,
    payload: { employees },
  });
};

export const getEmploye = (empId) => async (dispatch, getState) => {
  const state = getState();
  const { employees } = state;

  let employe = employees.filter((employe) => {
    if (employe.id == empId) {
      return employe;
    }
  });
  dispatch({
    type: GET_EMPLOYE,
    payload: { employe },
  });
};

export const incrementEmployeVote = (empId) => async (dispatch) => {
  dispatch({
    type: INCREMENT_EMPLOYE_VOTE,
    payload: { empId },
  });
};
