import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
class Genre {
  @Field(type => Int, { nullable: true }) id: number;
  @Field(type => String, { nullable: true }) name: string;
}

@ObjectType()
export class Genres {
  @Field(type => [Genre], { nullable: true }) genres: Genre[];
}