export class AppConfigService {
  private static instance: AppConfigService;

  private constructor(
    public readonly companyName: string,
    public readonly footer: string
  ) {}

  public static getInstance(): AppConfigService {
    if (!this.instance) {
      this.instance = new AppConfigService("Acme Inc.", "Confidential");
    }
    return this.instance;
  }
}