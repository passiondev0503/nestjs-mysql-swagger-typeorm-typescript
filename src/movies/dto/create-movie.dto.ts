import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "Title of the movie",
    example: "The Shawshank Redemption",
    required: true,
  })
  title: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    description: "Year of the movie",
    example: 1994,
    required: true,
  })
  year: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    description: "Runtime of the movie",
    example: 142,
    required: true,
  })
  runtime: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "Genres of the movie",
    example: "Drama",
    required: true,
  })
  genres: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: "Director of the movie",
    example: "Frank Darabont",
    required: false,
  })
  director?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: "Actors of the movie",
    example: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    required: false,
  })
  actors?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: "Plot of the movie",
    example: "Two imprisoned ...",
    required: false,
  })
  plot?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: "Poster of the movie",
    example:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    required: false,
  })
  posterUrl?: string;
}
