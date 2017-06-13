export class Post {
  constructor(
    public title: string,
    public slug: string,
    public body: string,
    public posted: string,
    public category: string) { }
}