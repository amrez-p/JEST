const sum = require("./sum");

describe("object", () => {
  it("object assignment", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });
});
describe("numbers", () => {
  it("should add 1 + 2 equal 3", () => {
    let result = sum(1, 2);
    expect(result).toBe(3);
  });

  it("should multiply 2 * 2 equal 4", () => {
    const num = 2 * 2;
    expect(num).toBeLessThan(5);
    expect(num).toBeGreaterThan(3);
    expect(num).toBeGreaterThanOrEqual(3.5);
    expect(num).toBeLessThanOrEqual(4.5);
  });

  it("should be close to 0.3", () => {
    const float = 0.1 + 0.2;
    expect(float).toBeCloseTo(0.3);
  });
});

describe("strings", () => {
  test("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });

  test("there is jam in jamica", () => {
    expect("jamica").toMatch(/jam/);
  });
});

describe("array", () => {
  const List = ["diapers", "kleenex", "trash bags", "paper towels", "milk"];
  test("there is a specific item", () => {
    expect(List).toContain("milk");
  });
});
