import { Field, Int, ObjectType } from "type-graphql";

import { FullDetails } from "../details";
import { Image } from "../images";

@ObjectType()
export class Collection {
  @Field(type => Int, { nullable: true }) id: number;
  @Field(type => String, { nullable: true }) name: string;
  @Field(type => String, { nullable: true }) overview: string;
  @Field(type=> String, { nullable: true }) poster_path: string | null;
  @Field(type => String, { nullable: true }) backdrop_path: string;
  @Field(type => [CollectionDetails], { nullable: true }) parts: CollectionDetails[];
}

@ObjectType ()
export class CollectionDetails extends FullDetails {
  @Field(type => [Int], { nullable: true }) genre_ids: number[];
}

@ObjectType()
export class CollectionImages {
  @Field(type => Int, { nullable: true }) id: number;
  @Field(type => [Image], { nullable: true }) backdrops: Image[];
  @Field(type => [Image], { nullable: true }) posters: Image[];
}