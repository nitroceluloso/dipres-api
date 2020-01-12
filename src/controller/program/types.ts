
export interface ProgramQuery extends IndexSignature<string | undefined> {
    evaluation?: string;
    ministry?: string;
    publicService?: string;
    year?: string;
    page?: string;
}
