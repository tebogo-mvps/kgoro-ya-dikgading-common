import ReferenceFieldDTO from "./ReferenceFieldDTO";
interface MemberDTO {
    id: number;
    name: string;
    surname: string;
    dateOfBirth: Date | string;
    address: string;
    cellphoneNumber: string;
    email: string;
    subscriptions: ReferenceFieldDTO[];
}
export default MemberDTO;
