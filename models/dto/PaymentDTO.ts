import ReferenceFieldDTO from "./ReferenceFieldDTO";

interface PaymentDTO
{
    id: number
    date: Date | string
    amount: number
    member: ReferenceFieldDTO
    account: ReferenceFieldDTO
}

export default PaymentDTO
