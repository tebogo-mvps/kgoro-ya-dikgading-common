import ReferenceFieldDTO from "./ReferenceFieldDTO";
interface MemberDTO {
    [key: string]: number | string | ReferenceFieldDTO[];
    id: number;
    name: string;
    surname: string;
    dateOfBirth: string;
    address: string;
    cellphoneNumber: string;
    email: string;
    subscriptions: ReferenceFieldDTO[];
}
export default MemberDTO;
