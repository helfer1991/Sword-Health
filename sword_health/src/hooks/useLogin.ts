import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useLogin() {
    const context = useContext(AuthContext)
    return context;
}