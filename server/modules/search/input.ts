import { Field, InputType, Int } from "type-graphql";

@InputType()
export class SearchCollectionsInput {
  @Field(type => String, { nullable: true }) language: string;
  @Field(type => Int) page: number;
  @Field(type => String) query: string;
}

@InputType()
export class SearchMoviesInput {
  @Field(type => Boolean, { nullable: true }) include_adult: boolean;
  @Field(type => String, { nullable: true }) language: string;
  @Field(type => Int) page: number;
  @Field(type => Int, { nullable: true }) primary_release_year: number;
  @Field(type => String) query: string;
  @Field(type => String, { nullable: true }) region: string;
  @Field(type => Int, { nullable: true }) year: number;
}

@InputType()
export class SearchPeopleInput {
  @Field(type => Boolean, { nullable: true }) include_adult: boolean;
  @Field(type => String, { nullable: true }) language: string;
  @Field(type => Int) page: number;
  @Field(type => String) query: string;
  @Field(type => String, { nullable: true }) region: string;
}

@InputType()
export class SearchTVInput {
  @Field(type => Int, { nullable: true }) first_air_date_year: number;
  @Field(type => Boolean, { nullable: true }) include_adult: boolean;
  @Field(type => String, { nullable: true }) language: string;
  @Field(type => Int) page: number;
  @Field(type => String) query: string;
}