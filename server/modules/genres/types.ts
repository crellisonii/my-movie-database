import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class GenresResult {
  @Field(type => [Genre], { nullable: true }) genres: Genre[];
}

@ObjectType()
class Genre {
  @Field(type => Int, { nullable: true }) id: number;
  @Field(type => String, { nullable: true }) name: string;
}