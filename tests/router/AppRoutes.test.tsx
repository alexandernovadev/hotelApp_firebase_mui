import React from 'react';
import {AppRouter} from '../../src/router/AppRouter'
import { render, screen, fireEvent, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import * as redux from "react-redux";
const spy = jest.spyOn(redux, "useSelector");
spy.mockReturnValue({ username: "test" });


jest.mock("../../src/hooks/useCheckAuth", () => ({
  useCheckAuth: () => {
    return "process";
  },
}));


jest.mock("../../src/firebase/providers",()=>({
  GoogleAuthProvider:jest.fn()
}));



const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => mockDispatch
}));


jest.mock("react-i18next", () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe("Test in AppRoutes", () => {
  test("should first", () => {

    render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>
    );

    screen.debug()
    expect(true).toBe(true);

  });
});
