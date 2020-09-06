import { Field, Int, ObjectType } from "type-graphql";

import { FullDetails } from "../details";
import { Pagination } from '../pagination/types';

@ObjectType()
class Upcoming extends FullDetails {
  @Field(type => [Int], { nullable: true }) genre_ids: number[];
}

@ObjectType()
class UpcomingDates {
  @Field(type => String, { nullable: true }) maximum: string;
  @Field(type => String, { nullable: true }) minimum: string;
}

@ObjectType()
export class UpcomingMovies extends Pagination {
  @Field(type => [Upcoming], { nullable: true }) results: Upcoming[];
  @Field(type => UpcomingDates, { nullable: true }) dates: UpcomingDates;
}