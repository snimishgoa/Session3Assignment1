class Greeter {
    constructor() {
        this.message = 'Welcome to Angular World!!';
    }
    greet(userName) {
        if (userName)
            return `Hello ${userName} ${this.message}`;
        else
            return this.message;
    }
}
