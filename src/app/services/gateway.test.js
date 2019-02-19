import gateway from "./gateway";

gateway._redirectToLogin = jest.fn();

describe("gateway:service", () => {
  describe("when fetching external data", () => {
    describe("and request succesfully returns 200 OK", () => {
      test("returns the data", async () => {
        jest
          .spyOn(global, "fetch")
          .mockImplementation(() =>
            Promise.resolve({ json: () => ({ user_data: true }) })
          );

        const response = await gateway.get("/some-path");

        expect(response.user_data).toBeTruthy();
      });
    });

    describe("and request returns 401 Unauthorized", () => {
      test("redirects to /login", async () => {
        jest
          .spyOn(global, "fetch")
          .mockImplementation(() =>
            Promise.resolve({ status: 401, json: () => {} })
          );

        await gateway.get("/some-path");

        expect(gateway._redirectToLogin).toHaveBeenCalled();
      });
    });

    describe("and request fails", () => {
      test("redirects to /login", async () => {
        jest.spyOn(global, "fetch").mockImplementation(() => Promise.reject());

        await gateway.get("/some-path");

        expect(gateway._redirectToLogin).toHaveBeenCalled();
      });
    });
  });
});
