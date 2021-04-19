export class History {
  public from: string;
  public to: string;
  public output: string;
  public input: string;

  constructor(from: string, to: string, output: string, input: string) {
    this.from = from;
    this.to = to;
    this.output = output;
    this.input = input;
  }
}
