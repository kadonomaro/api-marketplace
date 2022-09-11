import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../providers";
import { User } from "../types";

export default class AuthService {
    async create({ email, password }: User) {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            return response.user;
        } catch (error) {
            console.log(error);
        }
    }

    async login({ email, password }: User) {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            return response.user;
        } catch (error) {
            console.log(error);
        }
    }

    async logout() {
        try {
            await auth.signOut();
        } catch (error) {
            console.log(error);
        }
    }
}
