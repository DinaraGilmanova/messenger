import dayjs from "dayjs";

export class Message {
  code: string;
  title: string;
  author: string;
  createDate: string;
  closed: boolean;

  constructor(obj: MessageObj);
  constructor(
    code?: string,
    title?: string,
    author?: string,
    createDate?: string,
    closed?: boolean
  );
  constructor(
    codeOrObj: string | MessageObj = `Q${Math.floor(
      Math.random() * (9999 - 1000) + 1000
    )}`,
    title = "",
    author = "",
    createDate: string = dayjs().format(),
    closed = false
  ) {
    if (typeof codeOrObj !== "string") {
      this.code = codeOrObj.code;
      this.title = codeOrObj.title;
      this.author = codeOrObj.author;
      this.createDate = codeOrObj.createDate;
      this.closed = codeOrObj.closed;
    } else {
      this.code = codeOrObj;
      this.title = title;
      this.author = author;
      this.createDate = createDate;
      this.closed = closed;
    }
  }
}

export interface MessageObj {
  code: string;
  title: string;
  author: string;
  createDate: string;
  closed: boolean;
}
