export class Post {
  constructor(
  	public purpose: string,
    public title: string,
    public slug: string,
    public body: string,
    public posted: string,
    public category: string) { }
}