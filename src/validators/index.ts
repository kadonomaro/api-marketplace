import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

const validate = (field: string | string[]): any => {
    return [
        check(field).trim().escape().notEmpty().withMessage("Поле обязательно для заполнения"),
        (req: Request, res: Response, next: NextFunction) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(200).json({ success: false, errors: errors.array() });
            }
            next();
        },
    ];
};

export { validate };
