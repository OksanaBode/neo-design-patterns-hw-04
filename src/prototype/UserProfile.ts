// TODO: реалізуйте клас або інтерфейс тут
import { UserProfilePrototype } from "./UserProfilePrototype";

export class UserProfile implements UserProfilePrototype {
  constructor(
    public username: string,
    public department: "finance" | "engineering" | "marketing",
    public permissions: {
      canEditUsers: boolean;
      canApproveBudget: boolean;
      canAccessInternalTools: boolean;
    }
  ) {}

  public clone(): UserProfilePrototype {
    return new UserProfile(this.username, this.department, {
      ...this.permissions,
    });
  }
}
