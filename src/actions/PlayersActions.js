import * as types from '../constants/ActionTypes';

export function addPlayer(name) {
  return {
    type: types.ADD_PLAYER,
    name,
  };
}

export function deletePlayer(id) {
  return {
    type: types.DELETE_PLAYER,
    id,
  };
}

export function starPlayer(id) {
  return {
    type: types.STAR_PLAYER,
    id,
  };
}

export function setSF() {
  return {
    type: types.SET_SF,
  };
}

export function setPG() {
  return {
    type: types.SET_PG,
  };
}

export function sortStar() {
  return {
    type: types.SORT_STAR,
  };
}
