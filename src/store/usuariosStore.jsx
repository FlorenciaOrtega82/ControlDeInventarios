import { create } from "zustand";
import { InsertarUsuarios, MostrarUsuarios } from "../index";
import supabase from "../supabase/supabase.config";

export const useUsuariosStore = create((set, get) => ({
    insertarUsuarioAdmin: async (p) => {
        const { data, error } = await supabase.auth.signUp({
            email: p.correo,
            password: p.pass,
        });
        console.log("data del registro del user auth: ", data);
        if (error) return;
        const datauser = await InsertarUsuarios({
            idauth: data.user.id,
            fecharegistro: new Date(),
            tipouser: "admin",
        });
        return datauser;
    },
    idusuarios: 0,
    mostrarUsuarios: async () => {
        const response = await MostrarUsuarios();
        set({ idusuario: response.id });
        return response;
    },
}));
