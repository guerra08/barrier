export const GetSeconds = () => {
    return 30 - (new Date().getSeconds() % 30);
}