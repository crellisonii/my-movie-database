import { Field, Float, Int, ObjectType } from "type-graphql";

@ObjectType()
export class ListResult {
  @Field(type => Boolean, { nullable: true }) adult: boolean;
  @Field(type => String, { nullable: true }) backdrop_path: string | null;
  @Field(type => String, { nullable: true }) first_air_date: string;
  @Field(type => [Int], { nullable: true }) genre_ids: number[];
  @Field(type => Int, { nullable: true }) id: number;
  @Field(type => String) media_type: string;
  @Field(type => String, { nullable: true }) name: string;
  @Field(type => [String], { nullable: true }) origin_country: string[];
  @Field(type => String, { nullable: true }) original_language: string;
  @Field(type => String, { nullable: true }) original_name: string;
  @Field(type => String, { nullable: true }) original_title: string;
  @Field(type => String, { nullable: true }) overview: string;
  @Field(type => Float, { nullable: true }) popularity: number;
  @Field(type => String, { nullable: true }) poster_path: string | null;
  @Field(type => String, { nullable: true }) release_date: string;
  @Field(type => String, { nullable: true }) title: string;
  @Field(type => Boolean, { nullable: true }) video: boolean;
  @Field(type => Float, { nullable: true }) vote_average: number;
  @Field(type => Int, { nullable: true }) vote_count: number;
}