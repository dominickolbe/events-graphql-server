import { buildSchema } from "graphql";
import { EventModel } from "../database/model/Event";

export const schema = buildSchema(`

  type Event {
    _id: String
    name: String
    location: String
    createdAt: String
  }

  type Query {
    event(_id: String): Event
    events(location: String): [Event]
  }

`);

export const resolver = {
  //@ts-ignore
  event: (args) => EventModel.findOne(args),
  //@ts-ignore
  events: (args) => EventModel.find(args),
};
