import { AbstractEntity } from 'src/abstraction/abstract.entity';
import { Address } from './address.entity';
import { Column,Entity,JoinColumn,OneToOne,PrimaryGeneratedColumn,ManyToMany, JoinTable, OneToMany, ManyToOne } from "typeorm";
import { Project } from 'src/projects/entities/project.entity';
import { Task } from 'src/projects/entities/task.entity';
import { Team } from 'src/team/entities/team.entity';
@Entity()
export class User extends AbstractEntity<User> {


    @Column({name:"first_name"}) 
    firstName: string;

    @Column({name:"last_name"}) 
    lastName: string;

    @Column()
    age: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToOne(() => Address , {cascade: true})
    @JoinColumn()
    address:Address

    @ManyToMany(() => Project, (project)=>project.users, {cascade: true})
    @JoinTable()
    projects: Project[];

    @OneToMany(() => Task , (tasks) => tasks.user)
    @JoinTable()
    tasks: Task[];

    @ManyToOne(() => Team )
    @JoinTable()
    team: Team[];
}
