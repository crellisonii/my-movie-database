import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Pagination {
  @Field(type => Int, { nullable: true }) page: number;
  @Field(type => Int, { nullable: true }) total_pages: number;
  @Field(type => Int, { nullable: true }) total_results: number;
}