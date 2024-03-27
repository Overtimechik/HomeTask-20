import { CreateTaskDto } from "src/projects/dto/create-task.dto";
import { CreateUserDto } from "src/user/dto/create-user.dto";
export class CreateTeamDto {
    name: string;
    structure: CreateUserDto;
    tasks:CreateTaskDto;
}
