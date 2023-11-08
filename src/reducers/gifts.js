import giftService from "../services/gifts";
import { setNotification } from "./notification";

const giftReducer = (state = [], action) => {
  switch (action.type) {
  case "INIT_GIFTS":
    return action.data;
  case "CREATE_GIFT":
    return [...state, action.data];
  case "DELETE_GIFT": {
    return state.filter((g) => g.id !== action.id);
  }
  case "UPDATE_GIFT": {
    const reserved = action.data;
    return state.map((g) => (g.id === reserved.id ? reserved : g));
  }
  default:
    return state;
  }
};

export const initGifts = () => {
  return async (dispatch) => {
    const data = await giftService.getAll();
    dispatch({
      type: "INIT_GIFTS",
      data,
    });
  };
};

export const createGift = (content) => {
  return (dispatch) => {
    giftService
      .create(content)
      .then((data) => {
        dispatch({
          type: "CREATE_GIFT",
          data,
        });
        dispatch(
          setNotification(`Entry ${data.name} was created`, "success", 5)
        );
      })
      .catch(() => {
        dispatch(setNotification("Something went wrong", "error", 5));
      });
  };
};

export const removeGift = (id) => {
  return (dispatch) => {
    giftService
      .deleteGift(id)
      .then(() => {
        dispatch({
          type: "DELETE_GIFT",
          id,
        });
        dispatch(setNotification("The gift was removed", "success", 5));
      })
      .catch(() => {
        dispatch(
          setNotification(
            "Give removal failed. Check if you have rights",
            "error",
            5
          )
        );
      });
  };
};

export const changeAvailability = (gift) => {
  return async (dispatch) => {
    const data = await giftService.changeReserved(gift);
    dispatch({
      type: "UPDATE_GIFT",
      data,
    });
  };
};

export const updateGift = (gift) => {
  return (dispatch) => {
    giftService
      .update(gift)
      .then((data) => {
        dispatch({
          type: "UPDATE_GIFT",
          data,
        });
        dispatch(
          setNotification(`Entry ${data.name} was updated`, "success", 5)
        );
      })
      .catch(() => {
        dispatch(setNotification("Something went wrong", "error", 5));
      });
  };
};

export default giftReducer;
