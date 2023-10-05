export class Article {
    id?: number;
    name!: string;
    imageURL!: string;
    price!: number;
    description: string = "Description manquante";
    short_description?: string;
    category?: string;
    favorite?: boolean;
    stars: number = 0;



}