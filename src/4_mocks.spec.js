const { getPost } = require("./promises");

jest.mock("axios");
// asigna mocks a todos los métodos de axios:
// axios.get = jest.fn()
// axios.post = jest.fn()
// ...

const axios = require("axios").default;

describe("getPost", () => {
  // similar a agregar la opción: clearMocks: true en jest.config.js
  // afterEach(() => {
  //   jest.clearAllMocks();
  // });

  it("testing mocks", () => {
    const mock = jest.fn().mockImplementation((a, b) => a + b);

    expect(mock).not.toBeCalled();

    const result = mock(2, 2);

    expect(mock).toBeCalled();
    expect(mock).toBeCalledTimes(1);
    expect(mock).toBeCalledWith(2, 2);

    expect(result).toBe(4);
  });

  it("should get a post by id", async () => {
    const post = {
      id: 1,
      title: "title",
    };

    //// mock asignado a mano
    // axios.get = jest.fn().mockImplementation(() => Promise.resolve({ data: post }));
    //// atajo para hacer lo mismo:
    // axios.get = jest.fn().mockResolvedValue({ data: post });

    // automock generado por jest.mock("axios")
    axios.get.mockResolvedValue({ data: post });

    const result = await getPost(1);

    expect(result).toEqual(post);
  });

  it("should call axios.get with the post id", async () => {
    const post = {
      id: 1,
      title: "title",
    };

    axios.get.mockResolvedValue({ data: post });

    await getPost(1);

    expect(axios.get).toBeCalledWith(expect.stringContaining("/posts/1"));
    expect(axios.get).toBeCalledTimes(1);
  });

  it("should throw error when the axios call fails", async () => {
    axios.get.mockRejectedValue(new Error("post not found"));

    await expect(getPost(1)).rejects.toThrow(/not found/i);
  });
});
