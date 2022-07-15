import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class FindOneMovieDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    description: "Id of the movie",
    example: 1,
    required: true,
  })
  id: number;
}
