import { URI } from "otpauth";

export const Generate = (url: string) => {
    return URI.parse(url).generate();
}