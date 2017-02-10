import { IPublisher } from "./ipublisher";

export interface IBook {
    title: string;
    subtitle: string;
    isbn: string;
    abstract: string;
    numPages: number;
    author: string;
    publisher: IPublisher;

}

export class Book implements IBook {
    title: string;
    subtitle: string;
    isbn: string;
    abstract: string;
    numPages: number;
    author: string;
    publisher: IPublisher;

}
