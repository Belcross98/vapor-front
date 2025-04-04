
export interface Review {
    id: number;
    mangaId: number;
    userId: number;
    rating: number;
    reviewText: string;
    createdAt: Date;
    comment : string;
    userName?: string; // Optional field to include the user's name
    mangaName?: string; // Optional field to include the manga's name
}