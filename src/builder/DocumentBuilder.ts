// TODO: реалізуйте клас або інтерфейс тут
export class DocumentBuilder {
  private header: string = "";
  private body: string = "";
  private footer: string = "";

  public addHeader(header: string): this {
    this.header = `=== ${header} ===`;
    return this;
  }

  public addBody(body: string): this {
    this.body = body;
    return this;
  }

  public addFooter(footer: string): this {
    this.footer = footer;
    return this;
  }

  public build(): string {
    return `${this.header}\n\n${this.body}\n\n${this.footer}`;
  }
}
