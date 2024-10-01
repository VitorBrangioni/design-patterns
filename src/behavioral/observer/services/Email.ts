
class Email {

    private constructor() {}

    static send(email: string) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('sending email to ', email);
                resolve(true);
            }, 2000);
        });
    }

}

export default Email;