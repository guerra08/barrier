export default interface AppContextData {
    hasAuth: boolean;
    authenticate(): void;
    unauthenticate(): void;
    countdown: number;
}