import { Field, InputType } from "type-graphql";

@InputType()
export class GenresInput {
  @Field(type => String, { nullable: true }) language: string;
}