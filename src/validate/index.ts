import { Request, Response, NextFunction } from "express";
import { ValidationService } from "../ValidationService";

const validate = (fields: string[]): any => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { body } = req;
        const validationService = new ValidationService(body);

        fields.forEach((field) => {
            validationService.check(field).trim().isNotEmpty();
        });
        if (validationService.errors.length > 0) {
            return res.status(500).json({ success: false, errors: validationService.errors });
        }
        next();
    };
};

export { validate };
