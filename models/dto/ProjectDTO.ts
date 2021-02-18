interface ProjectDTO
{
    [key: string]: number | string
    
    id: string
    name: string
    description: string
    monthlyCost: number
}

export default ProjectDTO
