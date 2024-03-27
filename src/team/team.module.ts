import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { User } from 'src/user/entities/user.entity';
import { Task } from 'src/projects/entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Team, User, Task])],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
