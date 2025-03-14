import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { create } from "zustand";
import { InsertarUsuarios } from "../index";
export const useUsuariosStore = create((set, get) => ({
    insertarUsuarioADmin: async (p) => {
        const { data, error } = await supabase.auth.singUp({
            email: p.correo,
            password: p.pass,
        });
        console.log("data del registro del user: ", data);
        if (error) return null;
        await InsertarUsuarios({
            idauth: data.user.id,
            fecharegistro: new Date(),
            tipouser: "admin",
        });
    },
}));
