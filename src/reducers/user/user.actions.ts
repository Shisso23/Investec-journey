import {setUsername} from './user.reducer';

export const setUserNameAction =
  async (username: string) => async (dispatch: Function) => {
    return dispatch(setUsername(username));
  };
