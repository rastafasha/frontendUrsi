import { environment } from "src/environments/environment";

const base_url = environment.apiUrlMedia;
export class Curso {
  id: number;
  name: string;
  category?: 'DIGITAL_GOODS';
  description: string;
  adicional: string;
  price: any;
  image: string;
  urlVideo: string;
  modal: string;
  slug: string;
  created_at: string;
  updated_at: string;
  status?: 'APPROVED' | 'PENDING' | 'REJECTED';
  // description: string;
  // category:string;



  constructor(id, name, category, description, price,  image,   ){
    this.id = id;
    this.name = name;
    this.category = category;
    this.description = description;
    this.price = price;
    this.image = image;
  }


  get imagenUrl(){

    if(!this.image){
      return `${base_url}/cursos/no-image.jpg`;
    } else if(this.image.includes('https')){
      return this.image;
    } else if(this.image){
      return `${base_url}/cursos/${this.image}`;
    }else {
      return `${base_url}/no-image.jpg`;
    }

  }
}

// const PUBLISHED = 'PUBLISHED';
//     const PENDING = 'PENDING';
//     const REJECTED = 'REJECTED';
