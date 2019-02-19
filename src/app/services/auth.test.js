import { Auth, STORAGE_KEY } from "./auth";

const token = "123abc";
const setItem = jest.fn();
const getItem = jest.fn().mockReturnValue(token);

const authService = new Auth({
  setItem,
  getItem
});

describe("auth:service", () => {
  test("saves token to local storage", () => {
    authService.setToken(token);

    expect(setItem).toHaveBeenCalledWith(STORAGE_KEY, token);
  });

  test("gets token from local storage", () => {
    const response = authService.getToken(token);

    expect(response).toBe(token);
  });
});
