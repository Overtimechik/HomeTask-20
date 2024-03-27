import { Module } from '@nestjs/common';
import { DatabeseModule } from './databese/databese.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { CarsModule } from './cars/cars.module';
import { ProjectsModule } from './projects/projects.module';
import { TeamModule } from './team/team.module';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabeseModule, UserModule, CarsModule, ProjectsModule, TeamModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
