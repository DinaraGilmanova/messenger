import { Message, MessageObj } from "@/models/Message";

export class GroupMessage {
  public title: string;
  public count: number;
  public messages: Message[];

  constructor(obj: GroupMessageObj) {
    this.title = obj.title;
    this.count = obj.messages.length;
    this.messages = obj.messages.map(item => new Message(item));
  }
}

export type GroupMessageObj = Readonly<{
  title: string;
  messages: MessageObj[];
}>;
