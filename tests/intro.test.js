import { describe, test, it, expect } from "vitest";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    // AAA
    // Arrange
    const a = 2;
    const b = 1;

    // Act: perform the action
    const result = max(a, b);

    // Assert: verify the result is correct
    expect(result).toBe(2);
  });
});
