
import { Payment } from "./payment";
import { Profile } from "./profile";
import { environment } from "src/environments/environment";
const base_url = environment.apiUrlMedia;
export class User {

    id: number;
    // role_id: number = 3; // 3 = Rol miembro
    username: string = "";
    email: string = "";
    password?: string = "";
    first_name: string = "";
    last_name: string = "";
    token: string = "";
    is_active: number = 0;
    created_at: string = "";
    role?: 'SUPERADMIN' | 'ADMIN' | 'MEMBER' | 'EDITOR' | 'GUEST';
    payments: Payment;
    profiles: Profile;
    image: Profile;
    nombre: Profile;
    surname: Profile;
    direccion: Profile;
    pais: Profile;
    estado: Profile;
    telhome: Profile;
    telmovil: Profile;
    facebook: Profile;
    instagram: Profile;
    twitter: Profile;
    linkedin: Profile;



}
