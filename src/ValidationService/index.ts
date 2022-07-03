type ErrorType = {
    field: string;
    message: string;
};

export class ValidationService {
    private body: any;
    private field: string;
    private value: string;
    private _errors: ErrorType[];

    constructor(body: any) {
        this.body = body;
        this.value = "";
        this.field = "";
        this._errors = [];
    }

    private setError({ field, message }: ErrorType): void {
        this._errors.push({ field, message });
    }

    get errors(): ErrorType[] {
        return this._errors;
    }

    trim() {
        this.value = this.value.trim();
        return this;
    }
    toLower() {
        this.value = this.value.toLowerCase();
        return this;
    }

    isNotEmpty(message: string) {
        if (this.value.length > 0) {
            return;
        }
        this.setError({ field: this.field, message });
    }

    isEmail(message: string) {
        if (this.value.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gi)) {
            return;
        }
        this.setError({ field: this.field, message });
    }

    check(field: string) {
        this.field = field;
        this.value = this.body[this.field];
        return this;
    }
}

const body = {
    slug: "   abcABC ",
    name: "  ",
    email: "denis.afer@gmail",
};

const validationService = new ValidationService(body);
validationService.check("name").trim().isNotEmpty("empty message");
validationService.check("email").isEmail("Неверный email");
console.log(validationService.errors);
