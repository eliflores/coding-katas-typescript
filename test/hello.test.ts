import { sayHello } from "../src/hello";
describe("sayHello", (): void => {
  it("says Hello World!", (): void => {
    expect(sayHello()).toEqual("Hello World!");
  });
});
