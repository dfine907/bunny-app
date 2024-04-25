export interface Bunny {
    bunny_id?: number;
    name: string;
    gender: string;
    breed: number;
    age: number;
    dob: Date,
    bun_breed_name?: string
  }

  export interface Breed {
    breed_id: number;
    breed_name: string
  }