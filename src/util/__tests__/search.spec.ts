import { countClientsMatching } from "../search";
import * as ClientsModule from "../clients";

describe("countClientsMatching tests", () => {
  test("should return 0 when 0 out of 2 clients match", () => {
    jest.spyOn(ClientsModule, "requestClients").mockReturnValue([
      {
        id: 1,
        name: "Maria Brown",
      },
      {
        id: 2,
        name: "Carlos Barros",
      },
    ]);

    const result = countClientsMatching("Silva");
    expect(result).toEqual(0);
  });

  test("should return 2 when 2 out of 4 clients match", () => {
    jest.spyOn(ClientsModule, "requestClients").mockReturnValue([
      {
        id: 1,
        name: "Maria Brown",
      },
      {
        id: 2,
        name: "Carlos Barros",
      },
      {
        id: 3,
        name: "Sandra Silva",
      },
      {
        id: 4,
        name: "Tiago Silva",
      },
    ]);

    const result = countClientsMatching("Silva");
    expect(result).toEqual(2);
  });
});
