import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import GiftForm from "./GiftForm";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

describe("basic test to try jest", () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  let store;

  it("calls onSubmit", async () => {
    const user = {
      id: "123",
    };

    store = mockStore({});
    render(
      <Provider store={store}>
        <BrowserRouter>
          <GiftForm currentUser={user} />
        </BrowserRouter>
      </Provider>
    );

    const giftToCreate = {
      name: "Lol House",
      description: "Some desc",
      url: "https://fullstackopen.com",
    };

    const nameInput = screen.getByLabelText("name");
    userEvent.type(nameInput, giftToCreate.name);

    const descriptionInput = screen.getByLabelText("description");
    userEvent.type(descriptionInput, giftToCreate.description);

    const urlInput = screen.getByLabelText("url");
    userEvent.type(urlInput, giftToCreate.url);

    const saveButton = screen.getByText("save");
    userEvent.click(saveButton);

    // make sure the form is submitted irregardless of the result
    await waitFor(() => {
      expect(store.getActions()[0].type).toEqual("SET_NOTIFICATION");
    });
  });
});
