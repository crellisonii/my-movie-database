import { Field, InputType, Int } from "type-graphql";

@InputType()
export class CollectionInput {
  @Field(type => Int) collection_id: number;
  @Field(type => String, { nullable: true }) language: string;
}