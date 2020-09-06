import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class ExternalIds {
  @Field(type => String, { nullable: true }) facebook_id: string | null;
  @Field(type => Int, { nullable: true }) id: number;
  @Field(type => String, { nullable: true }) imdb_id: string | null;
  @Field(type => String, { nullable: true }) instagram_id: string | null;
  @Field(type => Int, { nullable: true }) tvdb_id: number | null;
  @Field(type => String, { nullable: true }) twitter_id: string | null;
}
