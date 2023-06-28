import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("movies")

class Movie {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({length: 50, unique:true})
    name: string

    @Column({nullable: true, default:null})
    description: string

    @Column({})
    duration: number

    @Column({})
    price: number
}

export default Movie;
