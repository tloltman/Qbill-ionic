export class UserData {

    private currentUserName: string;
    private currentUserToken: string;


    constructor(userName: string, userToken: string) {
        this.currentUserName = userName;
        this.currentUserToken = userToken;
    }

    get getCurrentUserName(): string {
        return this.currentUserName;
    }

    get getCurrentUserToken(): string {
        return this.currentUserToken
    }
}