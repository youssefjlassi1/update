

export interface User {
    id?: string;
    username: string;
    password: string;
    email: string;
    roles: string[]; // Change this to an array of strings
    adresse: string;
    dateNaissance: string;
    telephone: string;
    
    verified: boolean;
    genre: string;
    aboutMe: string;
    verificationCode: string;


}
