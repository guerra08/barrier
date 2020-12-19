import { URI } from "otpauth";

export const GenerateTOTP = (url: string) => {
    return URI.parse(url);
}