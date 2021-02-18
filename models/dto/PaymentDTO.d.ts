import ReferenceFieldDTO from "./ReferenceFieldDTO";
interface PaymentDTO {
    [key: string]: number | string | ReferenceFieldDTO;
    id: number;
    date: string;
    amount: number;
    member: ReferenceFieldDTO;
    account: ReferenceFieldDTO;
}
export default PaymentDTO;
