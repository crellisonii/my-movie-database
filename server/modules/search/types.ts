import { Field, Float, Int, ObjectType } from "type-graphql";

import { ListResult } from "../list-results";
import { MovieListResults } from "../movie-list-results";
import { Pagination } from '../pagination';
import { TVListResults } from "../tv-list-results";

@ObjectType()
export class SearchCollections extends Pagination {
  @Field(type => [SearchCollectionsResults], { nullable: true }) results: SearchCollectionsResults[];
}

@ObjectType()
export class SearchMovies extends Pagination {
  @Field(type => [SearchMoviesResults], { nullable: true }) results: SearchMoviesResults[];
}

@ObjectType()
export class SearchPeople extends Pagination {
  @Field(type => [SearchPeopleResults], { nullable: true }) results: SearchPeopleResults[];
}

@ObjectType()
export class SearchTVShows extends Pagination {
  @Field(type => [SearchTVShowsResults], { nullable: true }) results: SearchTVShowsResults[];
}

@ObjectType()
class SearchCollectionsResults {
  @Field(type => Int, { nullable: true }) id: number;
  @Field(type => String, { nullable: true }) backdrop_path: string | null;
  @Field(type => String, { nullable: true }) name: string;
  @Field(type => String, { nullable: true }) poster_path: string | null;
}

@ObjectType()
class SearchMoviesResults extends MovieListResults {}

@ObjectType()
class SearchPeopleResults {
  @Field(type => Boolean, { nullable: true }) adult: boolean;
  @Field(type => Int, { nullable: true }) id: number;
  @Field(type => String, { nullable: true }) name: string;
  @Field(type => Float, { nullable: true }) popularity: number;
  @Field(type => String, { nullable: true }) profile_path: string | null;
  @Field(type => [KnownFor], { nullable: true }) known_for: KnownFor[];
}

@ObjectType()
class SearchTVShowsResults extends TVListResults {}

@ObjectType()
class KnownFor extends ListResult {
  @Field(type => String) media_type: string;
}