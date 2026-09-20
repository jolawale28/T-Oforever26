export type FamilyCategory =
    | "family"
    | "friend"
    | "colleague"
    | "church"
    | "other";

export type TAttendee = {
    id: string;
    fullname: string;
    email: string;
    phone: string;
    will_attend: boolean;
    family_category: FamilyCategory;
    message: string | null;
    created_at: Date;
};

export type TPagination = {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
};

export type TAttendeesResponse = {
    data: TAttendee[];
    pagination: TPagination;
};