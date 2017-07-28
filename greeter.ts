class Greeter{
    message: string;
    userName: string;

    constructor(){
        this.message = 'Welcome to Angular World!!';
    }

    greet(userName: string){
        if(userName)
            return `Hello ${userName} ${this.message}`;
        else
            return this.message;
    }
}