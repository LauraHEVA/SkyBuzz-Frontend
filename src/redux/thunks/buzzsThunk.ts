import { toast } from "react-toastify";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { BuzzBasic } from "../../types/buzzInterfaces";
import {
  addNewBuzzAction,
  commentBuzzAction,
  deleteBuzzAction,
  incrementLikesAction,
  loadAllBuzzsAction,
  loadDetailBuzzAction,
} from "../actions/actionsCreator";

export const loadAllBuzzsThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(`${process.env.REACT_APP_PUBLIC_API}buzzs/`);

  const buzzsListResponse = await response.json();
  const buzzListArray = buzzsListResponse.buzzs;
  dispatch(loadAllBuzzsAction(buzzListArray));
};

export const deleteBuzzThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const userToken = localStorage.getItem("UserToken");
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}buzzs/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    if (response.ok) {
      dispatch(deleteBuzzAction(id));
      toast.success("Buzz deleted correctly");
    } else {
      toast.error("Buzz not deleted. Remember you can only delete your Buzzs");
    }
  };

export const addNewBuzzThunk =
  (buzz: BuzzBasic) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const userToken = localStorage.getItem("UserToken");
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}buzzs/new`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(buzz),
      }
    );
    const newBuzz = await response.json();
    if (response.ok) {
      dispatch(addNewBuzzAction(newBuzz));
      toast.success("Buzz published!");
    } else {
      toast.error("Something went wrong. Buzz not created");
    }
  };

export const incrementLikesThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const userToken = localStorage.getItem("UserToken");
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}buzzs/${id}/like`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    if (response.ok) {
      dispatch(incrementLikesAction(id));
    } else {
      toast.error("Log in to like!");
    }
  };

export const loadDetailBuzzThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}buzzs/${id}`
    );

    const buzzDetailResponse = await response.json();
    const buzzDetail = buzzDetailResponse.buzz;
    dispatch(loadDetailBuzzAction(buzzDetail));
  };

export const commentBuzzThunk =
  (buzzComment: BuzzBasic, id: string) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const userToken = localStorage.getItem("UserToken");
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_API}buzzs/${id}/comment`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(buzzComment),
      }
    );
    const newBuzzCommented = await response.json();
    if (response.ok) {
      dispatch(commentBuzzAction(newBuzzCommented.buzzComment));
      toast.success("Comment published!");
    } else {
      toast.error("Something went wrong. Comment not published");
    }
  };
