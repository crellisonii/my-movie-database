import { Field, Float, Int, ObjectType } from "type-graphql";

@ObjectType()
export class CollectionResult {
  @Field(type => String, { nullable: true }) backdrop_path: string;
  @Field(type => Int, { nullable: true }) id: number;
  @Field(type => String, { nullable: true }) name: string;
  @Field(type => String, { nullable: true }) overview: string;
  @Field(type => [CollectionResultParts], { nullable: true }) parts: CollectionResultParts[];
}

@ObjectType()
export class CollectionResultParts {
  @Field(type => Boolean, { nullable: true }) adult: boolean;
  @Field(type => [Int], { nullable: true }) genre_ids: number[];
  @Field(type => Int, { nullable: true }) id: number;
  @Field(type => String, { nullable: true }) original_language: string;
  @Field(type => String, { nullable: true }) original_title: string;
  @Field(type => String, { nullable: true }) overview: string;
  @Field(type => String, { nullable: true }) release_date: string;
  @Field(type => Float, { nullable: true }) popularity: number;
  @Field(type => String, { nullable: true }) poster_path: string | null;
  @Field(type => String, { nullable: true }) title: string;
  @Field(type => Boolean, { nullable: true }) video: boolean;
  @Field(type => Float, { nullable: true }) vote_average: number;
  @Field(type => Int, { nullable: true }) vote_count: number;
}