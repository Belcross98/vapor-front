
export interface Review {
    id: number;
    mangaId: number;
    userId: number;
    rating: number;
    reviewText: string;
    createdAt: Date;
    comment : string;
    createdBy : string;
}