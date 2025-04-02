import { Review } from "./Review";
export interface Manga {
    id : number;
    name : string;
    mangaPictureURL? : string;
    averageRating? : number;
    description? : string;
    reviews : Review[];
}