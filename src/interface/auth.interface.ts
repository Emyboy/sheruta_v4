export interface User {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    avatar_url: string | null;
    email: string;
    last_seen: string;
}

export interface PersonalInfo {
    id: number;
    seeking: boolean;
}

export interface EmailSettings {
    id: number;
}