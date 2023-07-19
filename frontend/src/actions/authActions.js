import axios from 'axios';

// Action types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

// Action creators
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

// Async action for user login
export const loginUser = (credentials) => {
  return (dispatch) => {
    // Make API request to authenticate user
    axios.post('https://reqres.in/api/login', credentials)
      .then((response) => {
        // Assuming the response contains the user data
        const user = response.data;
        dispatch(loginSuccess(user));
        alert("hello Bhai")
      })
      .catch((error) => {
alert("wrong cred")
    });
  };
};

// Async action for user registration
export const registerUser = (userInfo) => {
  return (dispatch) => {
    axios.post('https://reqres.in/api/register', userInfo)
      .then((response) => {
        const user = response.data;
        dispatch(registerSuccess(user));
      })
      .catch((error) => {
        console.log("Error")
      });
  };
};
