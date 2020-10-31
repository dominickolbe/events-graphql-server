import { buildSchema } from "graphql";
import { EventModel } from "../database/model/Event";
import { UserModel } from "../database/model/User";

export const schema = buildSchema(`

  type User {
    _id: String
    name: String
    createdAt: String
  }

  type Event {
    _id: String
    name: String
    location: String
    createdAt: String
  }

  type Query {
    user(_id: String, name: String): User
    users: [User]

    event(_id: String, name: String): Event
    events(location: String): [Event]
  }

`);

export const resolver = {
  //@ts-ignore
  user: (args) => {
    return UserModel.findOne(args);
  },
  users: () => {
    return UserModel.find();
  },
  //@ts-ignore
  event: (args) => EventModel.findOne(args),
  //@ts-ignore
  events: (args) => EventModel.find(args),
};
