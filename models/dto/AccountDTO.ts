import ProjectDTO from "./ProjectDTO"

interface AccountDTO
{
    [key: string]: number | string | boolean | ProjectDTO[]
    
    id: number
    name: string
    recurring: boolean
    projects: ProjectDTO[]
}

export default AccountDTO
