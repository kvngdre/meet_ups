class APIResponse {
    public success;
    constructor(public message: string, public data?: object) {
        this.success = true;
    }
}

export default APIResponse;