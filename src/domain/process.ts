import Party from "./party";

export default interface Process {
    id: string;
    fileNumber: string;
    address: string;
    lastUpdateDate: Date;
    lastPromotionDate: Date;
    lastActuationDate: Date;
    courtRoom: string;
    judge: string;
    secretary: string;
    desk: string;
    originProcess: Process;
    type: string;
    state: string;
    parties: Party[];
    comments: Comment[];
}