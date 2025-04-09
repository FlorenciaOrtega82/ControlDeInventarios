import { create } from "zustand";
import { ContarUsuariosXempresa, MostrarEmpresa } from "../index";
import supabase from "../supabase/supabase.config";

export const useEmpresaStore = create((set, get) => ({
    contadorusuarios: 0,
    dataempresa: [],
    mostrarEmpresa: async (p) => {
        const response = await MostrarEmpresa(p);
        set({ dataempresa: response.empresa });
        return response.empresa;
    },
    contarusuarioXempresa: async (p) => {
        const response = await ContarUsuariosXempresa(p);
        set({ contadorusuarios: response });
        return response;
    },
}));
