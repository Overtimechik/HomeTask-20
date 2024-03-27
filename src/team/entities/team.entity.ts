import { AbstractEntity } from "src/abstraction/abstract.entity";
import { Project } from "src/projects/entities/project.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, OneToMany, OneToOne } from "typeorm";

@Entity()
export class Team extends AbstractEntity<Team> {
    @Column()
    name: string;

    @Column()
    structue: string;

    @OneToOne(() => Project , {cascade: true})
    @JoinColumn()
    project:Project 

    
    @OneToMany(() => User , (users) => users)
    @JoinTable()
    users: User[];
}
