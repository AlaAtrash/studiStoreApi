import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'products' })
export class Products {

  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',

    })
  id: number;

  @Column('varchar', {
    name: 'name',
    nullable: true
  })
  name: string;

  @Column('varchar', {
    name: 'img',
    nullable: true
  })
  img: string;

  @Column('varchar', {
    name: 'description',
    nullable: true
  })
  description: string;

  @Column('varchar', {
    name: 'price',
    nullable: true
  })
  price: string;


  @Column('varchar', {
    name: 'ref',
    nullable: true
  })
  ref: string;

  @Column('varchar', {
    name: 'age',
    nullable: true
  })
  age: string;

  @Column('varchar', {
    name: 'nbPlayers',
    nullable: true
  })
  nbPlayers: string;

  @Column('varchar', {
    name: 'timing',
    nullable: true
  })
  timing: string;

  @Column('varchar', {
    name: 'video',
    nullable: true
  })
  video: string;

}
