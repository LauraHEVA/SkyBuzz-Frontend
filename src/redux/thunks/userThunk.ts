import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import {
  DecodedToken,
  LoginData,
  RegisterUserData,
  UserData,
} from "../../types/userInterfaces";
import { loginUserAction, registerUserAction } from "../actions/actionsCreator";

export const loginUserThunk =
  (user: LoginData | UserData) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    if (response.ok) {
      const token = await response.json();
      const decodedToken: DecodedToken = await jwtDecode(token.token);
      const author = {
        username: user.username,
        id: decodedToken.id,
        name: user.username,
      };
      localStorage.setItem("UserToken", token.token);
      localStorage.setItem("author", JSON.stringify(author));

      const loggedUser = {
        username: user.username,
        password: (user as LoginData).password,
        id: decodedToken.id,
        token: token.token,
        loggedIn: true,
      };
      dispatch(loginUserAction(loggedUser));
      toast.success("You're logged in!");
    } else {
      toast.error("Wrong credentials");
    }
  };

export const registerUserThunk =
  (user: RegisterUserData) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    if (response.ok) {
      const newUser = await response.json();
      dispatch(registerUserAction(newUser));
      toast.success("User registered correctly");
    } else {
      toast.error("Something went wrong with the register process");
    }
  };
