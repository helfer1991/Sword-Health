import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useLogin() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useLogin must be used within an AuthContextProvider");
    }
    return context;
}