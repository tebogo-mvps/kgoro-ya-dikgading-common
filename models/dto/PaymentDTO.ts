import ReferenceFieldDTO from "./ReferenceFieldDTO"

interface PaymentDTO
{
    id: number
    date: string
    amount: number
    member: ReferenceFieldDTO
    account: ReferenceFieldDTO
}

export default PaymentDTO
