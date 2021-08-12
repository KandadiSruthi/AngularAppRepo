

export class User {
    firstName!: string;
    lastName!: string;
    email!: string;
    address!:string;
    role!:string;
  } 

  
  export interface UserModel{
    data:{
      date: Date;
    id: number;
    items: User[];
    }
  }