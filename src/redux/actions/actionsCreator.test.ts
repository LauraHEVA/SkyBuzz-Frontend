import { BuzzObject } from "../../types/buzzInterfaces";
import {
  addNewBuzzAction,
  cleanBuzzDetailAction,
  deleteBuzzAction,
  incrementLikesAction,
  loadAllBuzzsAction,
  loadDetailBuzzAction,
  loginUserAction,
  logoutUserAction,
  registerUserAction,
} from "./actionsCreator";

describe("Given a loadAllBuzzs Action", () => {
  describe("When it receives an array with buzzs", () => {
    test("Then it should return an action object with type 'load-all-buzzs'", () => {
      const buzzs: BuzzObject[] = [
        {
          topic: "general",
          likes: 0,
          comments: [],
          author: {
            name: "LauHater",
            id: "623245decaa7d69f96f10a95",
            username: "Laura0",
          },
          text: "Madonna is writting a message Madonna is writting a very long and repeated message Madonna is writting a message Madonna is writting a message Madonna is writting a message",
          date: "2022-03-11T12:22:36.899Z",
          id: "324k2l",
        },
        {
          topic: "general",
          likes: 0,
          comments: [],
          author: {
            name: "LauHater",
            id: "623245decaa7d69f96f10a95",
            username: "Laura0",
          },
          text: "Freddie is writting a very long, and also short, and repeated message and he is always copying Madonna's messages",
          date: "2022-03-11T12:22:36.899Z",
          id: "324k2l",
        },
      ];
      const expectedAction = {
        type: "load-all-buzzs",
        buzzs,
      };

      const action = loadAllBuzzsAction(buzzs);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a deleteBuzzAction function", () => {
  describe("When it receives an id", () => {
    test("Then it should return an action with type 'delete-one-buzz' and the buzz id as another property", () => {
      const idTodelete = "10";

      const expectedAction = {
        type: "delete-one-buzz",
        id: idTodelete,
      };

      const action = deleteBuzzAction(idTodelete);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given an incrementLikesAction function", () => {
  describe("When it receives an id", () => {
    test("Then it should return an action with type 'increment-likes' and the buzz id as another property", () => {
      const idToLike = "10";

      const expectedAction = {
        type: "increment-likes",
        id: idToLike,
      };

      const action = incrementLikesAction(idToLike);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given an addNewBuzzAction function", () => {
  describe("When it receives a", () => {
    test("Then it should return an action with type 'add-new-buzz' and the buzz id as another property", () => {
      const buzzToCreate = {
        topic: "general",
        likes: 0,
        comments: [],
        author: {
          name: "LauHater",
          id: "623245decaa7d69f96f10a95",
          username: "Laura0",
        },
        text: "Madonna is writting a message Madonna is writting a very long and repeated message Madonna is writting a message Madonna is writting a message Madonna is writting a message",
        date: "2022-03-11T12:22:36.899Z",
        id: "324k2l",
      };

      const expectedAction = {
        type: "add-new-buzz",
        buzz: buzzToCreate,
      };

      const action = addNewBuzzAction(buzzToCreate);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given an loadDetailBuzzAction function", () => {
  describe("When it receives a", () => {
    test("Then it should return an action with type 'load-detail-buzz' and the buzz id as another property", () => {
      const buzzToLoad = {
        topic: "general",
        likes: 0,
        comments: [],
        author: {
          name: "LauHater",
          id: "623245decaa7d69f96f10a95",
          username: "Laura0",
        },
        text: "Madonna is writting a message Madonna is writting a very long and repeated message Madonna is writting a message Madonna is writting a message Madonna is writting a message",
        date: "2022-03-11T12:22:36.899Z",
        id: "324k2l",
      };

      const expectedAction = {
        type: "load-detail-buzz",
        buzz: buzzToLoad,
      };

      const action = loadDetailBuzzAction(buzzToLoad);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given an cleanBuzzDetailAction function", () => {
  describe("When it receives a", () => {
    test("Then it should return an action with type 'clean-buzz-detail' and the buzz id as another property", () => {
      const expectedAction = {
        type: "clean-buzz-detail",
      };

      const action = cleanBuzzDetailAction();

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given an loginUserAction function", () => {
  describe("When it receives a", () => {
    test("Then it should return an action with type 'login-user' and the buzz id as another property", () => {
      const userData = {
        username: "Laura0",
        password: "Laura1234",
      };

      const expectedAction = {
        type: "login-user",
        userData: userData,
      };

      const action = loginUserAction(userData);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given an logoutUserAction function", () => {
  describe("When it receives a", () => {
    test("Then it should return an action with type 'logout-user' and the buzz id as another property", () => {
      const expectedAction = {
        type: "logout-user",
      };

      const action = logoutUserAction();

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given an registerUserAction function", () => {
  describe("When it receives a", () => {
    test("Then it should return an action with type 'register-user' and the buzz id as another property", () => {
      const userData = {
        name: "Lau",
        username: "Laura0",
        password: "Laura1234",
      };

      const expectedAction = {
        type: "register-user",
        userData: userData,
      };

      const action = registerUserAction(userData);

      expect(action).toEqual(expectedAction);
    });
  });
});
