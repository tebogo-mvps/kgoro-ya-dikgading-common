import ReferenceFieldDTO from "./ReferenceFieldDTO"

interface MemberDTO
{
    id: number
    name: string
    surname: string
    dateOfBirth: string
    address: string
    cellphoneNumber: string
    email: string
    subscriptions: ReferenceFieldDTO[]
}

export default MemberDTO
