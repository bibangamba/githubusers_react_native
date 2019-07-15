import { shallow, mount, render } from "enzyme";
import LoginScreen from "../LoginScreen";

import React from "react";
import renderer from "react-test-renderer";
const mock_password = "yolo-bibz#007";
const mock_username = "bibz";
const fetch = jest.fn(() => new Promise(resolve => resolve()));
const mockSuccesfulResponse = (status = 201, method = "POST") => {
  global.fetch = jest.fn().mockImplementationOnce(() => {
    return new Promise((resolve, reject) => {
      resolve({
        ok: true,
        status,
        json: () => {
          return returnBody ? returnBody : {};
        }
      });
    });
  });
};
describe("Test LoginScreen", () => {
  it("should match to snapshot", () => {
    const component = shallow(<LoginScreen />);
    expect(component).toMatchSnapshot();
  });

  it("should render the login screen without crashing", () => {
    const renderedScreen = renderer.create(<LoginScreen />).toJSON();
    expect(renderedScreen).toBeTruthy();
  });

  it("should render the header image", () => {
    const loginScreen = shallow(<LoginScreen />);
    expect(loginScreen.find("Image")).toHaveLength(1);
    expect(loginScreen.find("TextInput")).toHaveLength(2);
  });

  it("should change state if username is entered", () => {
    const instanceOfLoginScreen = renderer
      .create(<LoginScreen />)
      .getInstance();
    instanceOfLoginScreen.onUsernameFieldChange(mock_username);
    instanceOfLoginScreen.onPasswordFieldChange(mock_password);
    mockSuccesfulResponse();
    instanceOfLoginScreen.onSubmit();
    expect(instanceOfLoginScreen.state.username).toEqual(mock_username);
    expect(instanceOfLoginScreen.state.password).toEqual(mock_password);
  });

  //   it("should change state when text input values change", () => {
  //     const loginScreen = mount(<LoginScreen />);
  //     console.log(loginScreen);
  //     const usernameInput = loginScreen.find(input).at(0);
  //     const passwordInput = loginScreen.find(input).at(1);
  //     usernameInput.instance().value = mock_username;
  //     usernameInput.simulate("change");
  //     passwordInput.instance().value = mock_password;
  //     passwordInput.simulate("change");
  //     expect(loginScreen.state().username).toEqual(mock_username);
  //     expect(loginScreen.state().password).toEqual(mock_password);
  //   });
});
