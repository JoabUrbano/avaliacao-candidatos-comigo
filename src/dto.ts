export interface TicketDTO {
    id?: number;
    title: string;
    description: string;
    status?: 'open' | 'in_progress' | 'closed';
    createdAt?: Date;
    updatedAt?: Date;
    userId: number;
}
