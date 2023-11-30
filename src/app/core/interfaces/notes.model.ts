export interface INote {
    id: string;
    isDeleted: boolean;
    title: string;
    description: string;
    userId: string;
    dateModified: Date;
}