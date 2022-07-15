import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString } from "class-validator";

export class UpdateMovieDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: "Title of the movie",
    example: "The Shawshank Redemption",
    type: String,
  })
  title?: string;

  @IsInt()
  @IsOptional()
  @ApiProperty({
    description: "Year of the movie",
    example: 1994,
    type: Number,
  })
  year?: number;

  @IsInt()
  @IsOptional()
  @ApiProperty({
    description: "Runtime of the movie",
    example: 142,
    type: Number,
  })
  runtime?: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: "Genres of the movie",
    example: "Drama",
    type: String,
  })
  genres?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: "Director of the movie",
    example: "Frank Darabont",
    type: String,
  })
  director?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: "Actors of the movie",
    example: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    type: String,
  })
  actors?: string;

  @IsOptional()
  @ApiProperty({
    description: "Plot of the movie",
    example: "Two imprisoned ...",
    type: String,
  })
  plot?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: "Poster of the movie",
    example:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    type: String,
  })
  posterUrl?: string;
}
