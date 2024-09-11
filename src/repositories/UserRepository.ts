import { BaseRepository } from "./BaseRepository";

export class UserRepository extends BaseRepository {
  createUser = async (body?: {}) => {
    return await this.request("/auth/signup", "POST", body);
  };

  loginUser = async (body?: {}) => {
    return await this.request("/auth/signin", "POST", body);
  };
}
