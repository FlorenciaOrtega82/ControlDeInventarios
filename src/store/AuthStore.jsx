import { create } from "zustand";
import supabase from "../supabase/supabase.config";
export const useAuthStore = create((set, get) => ({
    signInWithEmail: async (p) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: p.correo,
            password: p.pass,
        });
        if (error) {
            console.log("Error de autenticación: ", error.message);
            return {
                success: false,
                message: error.message || "Error desconocido",
            };
        }
        return data.user;
    },
    signOut: async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            conlose.log("Error al cerra sesión: ", error.message);
            throw new Error(
                "A ocurrido un error durante el cierre de sesión" + error
            );
        }
    },
}));
