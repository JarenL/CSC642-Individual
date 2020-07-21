import React from "react";
import {
  cleanup,
  fireEvent,
  render,
  waitForElement,
} from "react-testing-library";
import InputForm from "./components/InputForm";
afterEach(cleanup);
describe("InputForm", () => {
  it("Check checkbox", async () => {
    const { getByLabelText, getByText } = render(<InputForm />);
    const checkboxNode = getByLabelText("Checkbox");
    fireEvent.click(checkboxNode);
    await waitForElement(() => getByText("Checkbox has checked"));
  });
  it("Check input", async () => {
    const { getByPlaceholderText, getByText } = render(<InputForm />);
    const inputNode = getByPlaceholderText("placeholder");
    fireEvent.change(inputNode, { target: { value: "new value" } });
    await waitForElement(() => getByText("Input has value"));
  });
});
