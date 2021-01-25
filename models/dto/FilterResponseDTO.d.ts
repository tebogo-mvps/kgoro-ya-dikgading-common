interface FilterResponseDTO<T> {
    page: number;
    size: number;
    totalPages: number;
    data: T[];
}
export default FilterResponseDTO;
