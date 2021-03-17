import { GroupMessage, GroupMessageObj } from "@/models/GroupMessage";

export class User {
  public name: string;
  public avatar: string;
  public messageGroups: GroupMessage[];

  constructor(obj: UserObj) {
    this.name = obj.name;
    this.avatar = obj.avatar;
    this.messageGroups = obj.messageGroups.map(item => new GroupMessage(item));
  }
}

export type UserObj = Readonly<{
  name: string;
  avatar: string;
  messageGroups: GroupMessageObj[];
}>;
