const { sum } = require("./basics");

beforeEach(() => {
  console.log("se ejecuta antes de cada test");
});
afterEach(() => {
  console.log("se ejecuta después de cada test");
});

beforeAll(() => {
  console.log("se ejecuta una vez antes de todos los tests");
});
afterAll(() => {
  console.log("se ejecuta una vez después de todos los tests");
});

describe("sum", () => {
  it("5 + 5 equals 10", () => {
    // ARRANGE
    const input1 = 5;
    const input2 = 5;

    // ACT
    const result = sum(input1, input2);

    // ASSERT
    expect(result).toBe(10);
  });

  it("should throw error if input is null", () => {
    const getResult = () => sum(null, 5);

    expect(getResult).toThrow("requires 2 numbers");
  });

  it.each([{ input1: 2, input2: 2, expected: 4 }])(
    "should return $expected if input1 is $input1 and input2 is $input2",
    ({ input1, input2, expected }) => {
      const result = sum(input1, input2);

      expect(result).toBe(expected);
    }
  );

  it.each([
    { input1: null, input2: null },
    { input1: undefined, input2: 5 },
    { input1: "adfadf", input2: 5 },
  ])(
    "should throw error if input1 is $input1 and input2 is $input2",
    ({ input1, input2 }) => {
      const getResult = () => sum(input1, input2);

      expect(getResult).toThrow("requires 2 numbers");
    }
  );

  // it.only("en este archivo, solo se ejecutará este test", () => {
  //   expect("hello").toBe("hello");
  // })

  it.skip("este test no se ejecutará", () => {
    expect("hello").toBe("hello");
  });
});
