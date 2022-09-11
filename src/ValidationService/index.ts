type ErrorType = {
    field: string;
    message: string;
};

enum ErrorMessage {
    Empty = "Поле обязательно для заполнения",
    Email = "Неверный формат email",
    Length = "Слишком короткий пароль",
}

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
        const error: ErrorType | undefined = this._errors.find((err) => err.field === field);
        if (!error) {
            this._errors.push({ field, message });
        }
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

    isNotEmpty(message: string = ErrorMessage.Empty) {
        if (this.value.length < 1) {
            this.setError({ field: this.field, message });
        }
        return this;
    }

    isEmail(message: string = ErrorMessage.Email) {
        if (this.value.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gi)) {
            return;
        }
        this.setError({ field: this.field, message });
    }

    minLength(message: string = ErrorMessage.Length, length: number = 8) {
        if (this.value.length >= length) {
            return;
        }
        this.setError({ field: this.field, message });
    }

    check(field: string) {
        this.field = field;
        this.value = this.body[this.field] || "";
        return this;
    }
}
