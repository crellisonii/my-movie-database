import { Field, InputType } from "type-graphql";

@InputType()
export class CollectionInput {
  @Field(type => String) collectionId: string;
  @Field(type => String) language: string = 'en-US';
}
