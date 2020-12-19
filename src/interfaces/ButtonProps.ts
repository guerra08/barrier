export default interface ButtonProps{
    action(): void;
    title: string;
    isActive: boolean;
    mode: "text" | "outlined" | "contained" | undefined;
    icon: string
}