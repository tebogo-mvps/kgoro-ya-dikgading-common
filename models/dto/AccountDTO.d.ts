import ProjectDTO from "./ProjectDTO";
interface AccountDTO {
    id: number;
    name: string;
    recurring: boolean;
    projects: ProjectDTO[];
}
export default AccountDTO;
