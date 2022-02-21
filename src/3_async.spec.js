function promiseSuccess() {
  return Promise.resolve("OK");
}

function promiseFail() {
  return Promise.reject("FAIL PROMISE");
}

describe("testing promises", () => {
  it("promiseSuccess should success", async () => {
    const result = await promiseSuccess();
    expect(result).toBe("OK");

    // alternativa
    // await expect(promiseSuccess()).resolves.toBe("OK");
  });

  it("promiseFail should fail", async () => {
    expect.assertions(1); // asegura que se ejecute una aserción para que el test pase
    try {
      await promiseFail();
    } catch (error) {
      expect(error).toMatch(/fail/i);
    }

    // alternativa
    // await expect(promiseFail()).rejects.toMatch(/fail/i);
  });
});
