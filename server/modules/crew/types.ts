import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Crew {
  @Field(type => String, { nullable: true }) credit_id: string;
  @Field(type => String, { nullable: true }) department: string;
  @Field(type => Int, { nullable: true }) gender: number | null;
  @Field(type => Int, { nullable: true }) id: number;
  @Field(type => String, { nullable: true }) job: string;
  @Field(type => String, { nullable: true }) name: string;
  @Field(type => String, { nullable: true }) profile_path: string | null;
}