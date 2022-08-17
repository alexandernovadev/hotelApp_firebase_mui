import React from "react";
import { render, screen } from "@testing-library/react";
import { AuthLayout } from "../../../../src/modules/auth/layouts/AuthLayout";
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

describe("Test in <AuthLayot/>", () => {
  const title = "Testing";
  const Componetn = () => <>Hola</>;

  test("Should match with the snapshot", () => {
    const { container } = render(
      <AuthLayout title={title} children={<Componetn />} />
    );
    expect(container).toMatchSnapshot();
  });

  test("Should show the correct title", () => {
    render(<AuthLayout title={title} children={<Componetn />} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
