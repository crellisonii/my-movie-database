import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Image {
  @Field(type => Int)
  aspect_ratio: number;
  @Field(type => String)
  file_path: string;
  @Field(type => Int)
  height: number;
  @Field(type => String, { nullable: true })
  iso_639_1: string;
  @Field(type => Int)
  vote_average: number;
  @Field(type => Int)
  vote_count: number;
  @Field(type => Int)
  width: number;
}
