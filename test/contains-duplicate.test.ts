import { containsDuplicate } from "../src/contains-duplicate";

describe("containsDuplicate", (): void => {
  it("returns true if the array contains duplicates", (): void => {
    expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
  });

  it("returns false if the array does not contain duplicates", (): void => {
    expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
  });
});
