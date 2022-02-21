const { v4: uuid } = require("uuid");

it("jest expect matchers", () => {
  // comparar primitivos: number, string, boolean, null, undefined
  expect(1).toBe(1);

  // negar una aserción -- ésto aplica en todos los matchers
  expect(1).not.toBe(2);

  // comparar objetos o arrays por su valor (no por referencia)
  expect({ a: 1 }).toEqual({ a: 1 });
  expect([1, 2, 3]).toEqual([1, 2, 3]);

  // comparar objetos de forma parcial
  expect({ a: 1, b: 2 }).toMatchObject({ a: 1 });

  // comprobar que un valor existe en un array
  expect(["a", "b"]).toContain("a");

  // comprobar que un objeto existe en un array de objetos
  expect([{ a: 1 }, { a: 2 }]).toContainEqual({ a: 1 });

  // comprobar un string con una expresión regular
  expect("Hola Mundo").toMatch(/mundo/i);

  // comparar valores con precision (valores decimales)
  expect(0.2 + 0.1).toBeCloseTo(0.3);

  // mayor o menor que
  expect(1).toBeGreaterThan(0);
  expect(1).toBeLessThan(2);
  expect(1).toBeGreaterThanOrEqual(1);
  expect(1).toBeLessThanOrEqual(1);

  // otros matchers
  expect({}).toBeDefined();
  expect(undefined).toBeUndefined();
  expect(null).toBeNull();
  expect(NaN).toBeNaN();
  expect("").toBeFalsy();
  expect("text").toBeTruthy();

  // comprobar que una función lanza un error
  const throwError = () => {
    throw new Error("ERROR MESSAGE");
  };
  expect(() => throwError()).toThrow(); // comprobar que lanza un error
  expect(() => throwError()).toThrow("ERROR"); // comprobar que el error contiene el texto
  expect(() => throwError()).toThrow(/error/i); // expresión regular
});

it("jest toEqual and toMatchObject matchers", () => {
  const persona = {
    id: uuid(),
    name: "yoelvis",
    email: "a@a.a",
    roles: ["user", "admin"],
    address: {
      street: "18 de Julio",
      city: "Montevideo",
      country: "Uruguay",
    },
    metadata: { login: true, lastLogin: new Date() },
  };

  // ejemplos de matchers, también se pueden usar con toMatchObject
  expect(persona).toEqual({
    id: expect.any(String),
    name: expect.stringContaining("yoe"),
    email: expect.stringMatching(/^\S+@\S+.\S+$/),
    roles: expect.arrayContaining(["user"]),
    address: expect.objectContaining({ country: "Uruguay" }),
    metadata: expect.anything(),
  });
});
