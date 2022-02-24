const { daysAgo } = require("./time");

describe("daysAgo", () => {
  beforeEach(() => {
    jest.useFakeTimers("modern");
  });

  it("should return 2 days ago", () => {
    jest.setSystemTime(new Date(2022, 1, 3));

    const result = daysAgo(new Date(2022, 1, 1));

    expect(result).toBe("2 days ago");
  });

  it("should return 1 day ago", () => {
    jest.setSystemTime(new Date(2022, 1, 2));

    const result = daysAgo(new Date(2022, 1, 1));

    expect(result).toBe("1 day ago");
  });
});
