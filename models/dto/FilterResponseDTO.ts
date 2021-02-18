interface FilterResponseDTO<T>
{
    [key: string]: number | T[]
    
    page: number
    size: number
    totalPages: number
    data: T[]
}

export default FilterResponseDTO