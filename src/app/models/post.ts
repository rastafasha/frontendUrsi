import { environment } from "src/environments/environment";
import { Category } from './category';
const base_url = environment.apiUrlMedia;
export class Post {

  id: number;
  category_id: Category;
  user_id: number;
  title?: string = "";
  description: string = "";
  slug: string = "";
  is_featured: boolean;
  status?: 'PUBLISHED' | 'PENDING' | 'REJECTED';
  image: string = "";
  name: Category;
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
