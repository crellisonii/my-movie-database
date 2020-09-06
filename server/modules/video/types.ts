import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Video {
  @Field(type => String, { nullable: true }) id: string;
  @Field(type => String, { nullable: true }) iso_639_1: string;
  @Field(type => String, { nullable: true }) iso_3166_1: string;
  @Field(type => String, { nullable: true }) key: string;
  @Field(type => String, { nullable: true }) name: string;
  @Field(type => String, { nullable: true }) site: string;
  @Field(type => Int, { nullable: true }) size: number;
  @Field(type => String, { nullable: true }) type: string;
}