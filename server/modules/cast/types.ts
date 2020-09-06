import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Cast {
  @Field(type => Int, { nullable: true }) cast_id: number;
  @Field(type => String, { nullable: true }) character: string;
  @Field(type => String, { nullable: true }) credit_id: string;
  @Field(type => Int, { nullable: true }) gender: number | null;
  @Field(type => Int, { nullable: true }) id: number;
  @Field(type => String, { nullable: true }) name: string;
  @Field(type => Int, { nullable: true }) order: number;
  @Field(type => String, { nullable: true }) profile_path: string | null;
}