import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Review {
  @Field(type => String, { nullable: true }) author: string;
  @Field(type => String, { nullable: true }) content: string;
  @Field(type => String, { nullable: true }) id: string;
  @Field(type => String, { nullable: true }) url: string;
}