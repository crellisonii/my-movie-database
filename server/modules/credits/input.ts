import { Field, InputType } from "type-graphql";

@InputType()
export class CreditsInput {
  @Field(type => String) credit_id: string;
}