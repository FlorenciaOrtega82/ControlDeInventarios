import Swal from "sweetalert2";
import { ObtenerIdAuthSupabase } from "./globalSupabase";
import supabase from "./supabase.config";

export const MostrarEmpresa = async (p) => {
    const { error, data } = await supabase
        .from("asignarempresa")
        .select(`empresa(id, nombre, simbolomoneda)`)
        .eq("id_usuario", p.idusuario)
        .maybeSingle();
    if (data) {
        return data;
    }
};
