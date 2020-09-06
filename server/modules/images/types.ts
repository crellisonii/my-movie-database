import { Field, Float, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Image {
  @Field(type => Float, { nullable: true }) aspect_ratio: number;
  @Field(type => String, { nullable: true }) file_path: string;
  @Field(type => String, { nullable: true }) file_type: string;
  @Field(type => Int, { nullable: true }) height: number;
  @Field(type => Int, { nullable: true }) id: number;
  @Field(type => String, { nullable: true }) iso_639_1: string | null;
  @Field(type => Float, { nullable: true }) vote_average: number;
  @Field(type => Int, { nullable: true }) vote_count: number;
  @Field(type => Int, { nullable: true }) width: number;
}