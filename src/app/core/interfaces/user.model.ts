export interface IUserCreation{
    Id: string;
    IsDeleted: boolean;
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
}

export interface IUser{
    Id: string;
    IsDeleted: boolean;
    FirstName: string;
    LastName: string;
    Email: string;
}

export interface IUserLogin{
    Email: string;
    Password: string;
}