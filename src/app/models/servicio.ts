import { environment } from "src/environments/environment";
import { ServicioTitle } from "./serviciotitle";

const base_url = environment.apiUrlMedia;
export class Servicio {

  id: string;
  service_id: ServicioTitle;
  price: number;
  title?: string = "";
  subtitle?: string = "";
  description: string = "";
  videoUrl: string = "";
  slug: string = "";
  status?: 'PUBLISHED' | 'PENDING' | 'REJECTED';
  image: string = "";
  imageTop: string = "";
  created_at?: any;
  updated_at?: any;




  // public get isActive():boolean{
  //     return (this.is_active === 1 ? true: false);
  // }


  get imagenUrl(){

    if(!this.image){
      return `${base_url}posts/no-image.jpg`;
    } else if(this.image.includes('https')){
      return this.image;
    } else if(this.image){
      return `${base_url}posts/${this.image}`;
    }else {
      return `${base_url}/no-image.jpg`;
      // return `./assets/img/no-image.jpg`;
    }

  }
}
