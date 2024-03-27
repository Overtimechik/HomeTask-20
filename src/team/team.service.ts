import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';
import { Project } from 'src/projects/entities/project.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TeamService {
  constructor(

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
  ){}
async create(createTeamDto: CreateTeamDto) {
    const team = new Team (createTeamDto);

    await this.teamRepository.save(team);

    return 'This action adds a new team';
  }


  async findOne(id: string) {
    return this.teamRepository.findOne({
      where: {id},
      relations: {
        users:true,
      }
    });
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  async remove(id: string) {
    await this.userRepository.delete({id});
    return `This action removes a #${id} user`;   }
}
