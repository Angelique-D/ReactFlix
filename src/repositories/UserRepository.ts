import { BaseRepository } from "./BaseRepository";

export class UserRepository extends BaseRepository {
    createUser = async (body?: {}) => {
        return await this.request('/auth/signup')
    }

    loginUser = async (body?: {}) => {
        return await this.request('/auth/signin')
    }
}