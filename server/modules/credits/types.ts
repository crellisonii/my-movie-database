import { Field, InputType, Int } from "type-graphql";

@InputType()
export class Credits {
  @Field(type => String, { nullable: true }) credit_type: string;
  @Field(type => String, { nullable: true }) department: string;
  @Field(type => String, { nullable: true }) id: string;
  @Field(type => String, { nullable: true }) job: string;
  @Field(type => CreditMedia, { nullable: true }) media: CreditMedia;
  @Field(type => String, { nullable: true }) media_type: string;
  @Field(type => CreditPerson, { nullable: true }) person: CreditPerson;
}

@InputType()
class CreditMedia {
  @Field(type => String, { nullable: true }) character: string;
  @Field(type => Int, { nullable: true }) id: number;
  @Field(type => String, { nullable: true }) name: string;
  @Field(type => String, { nullable: true }) original_name: string;
  @Field(type => [CreditMediaSeasons], { nullable: true }) seasons: CreditMediaSeasons[];
}

@InputType()
class CreditMediaSeasons {
  @Field(type => String, { nullable: true }) air_date: string;
  @Field(type => String, { nullable: true }) poster_path: string;
  @Field(type => Int, { nullable: true }) season_number: number;
}

@InputType()
class CreditPerson {
  @Field(type => Int, { nullable: true }) id: number;
  @Field(type => String, { nullable: true }) name: string;
}