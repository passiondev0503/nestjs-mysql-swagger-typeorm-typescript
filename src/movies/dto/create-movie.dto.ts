import { ApiProperty } from "@nestjs/swagger";

export class CreateMovieDto {
  @ApiProperty({
    description: "Title of the movie",
    example: "The Shawshank Redemption",
    required: true,
  })
  title: string;

  @ApiProperty({
    description: "Year of the movie",
    example: 1994,
    required: true,
  })
  year: number;

  @ApiProperty({
    description: "Runtime of the movie",
    example: 142,
    required: true,
  })
  runtime: number;

  @ApiProperty({
    description: "Genres of the movie",
    example: "Drama",
    required: true,
  })
  genres: string;

  @ApiProperty({
    description: "Director of the movie",
    example: "Frank Darabont",
    required: false,
  })
  director?: string;

  @ApiProperty({
    description: "Actors of the movie",
    example: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    required: false,
  })
  actors?: string;

  @ApiProperty({
    description: "Plot of the movie",
    example: "Two imprisoned ...",
    required: false,
  })
  plot?: string;

  @ApiProperty({
    description: "Poster of the movie",
    example:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    required: false,
  })
  posterUrl?: string;
}
