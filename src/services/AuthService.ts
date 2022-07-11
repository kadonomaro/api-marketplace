import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../providers";
import { User } from "../types";

export default class AuthService {
    create({ email, password }: User) {
        console.log({ email, password });
        createUserWithEmailAndPassword(auth, email, password).then((response) => {
            console.log(response.user);
        });
    }

    login({ email, password }: User) {
        signInWithEmailAndPassword(auth, email, password).then((response) => {
            console.log(response.user);
        });
    }

    logout() {
        auth.signOut().then((response) => {
            console.log(response);
        });
    }
}
