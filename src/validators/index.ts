import { body } from "express-validator";

const validate = (field: string | string[]): any => {
    return body(field)
        .trim()
        .escape()
        .notEmpty()
        .withMessage("Поле обязательно для заполнения");
};

export { validate };
