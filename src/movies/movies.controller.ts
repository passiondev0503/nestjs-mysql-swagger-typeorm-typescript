import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { ApiBody } from "@nestjs/swagger";

@Controller("movies")
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @ApiBody({ type: CreateMovieDto })
  @Post("/create")
  create(@Body() createMovieDto: CreateMovieDto, @Res() res) {
    this.moviesService.create(createMovieDto);
    res.status(HttpStatus.CREATED).json(createMovieDto);
  }

  @Get("/all")
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Res() res) {
    return res.status(HttpStatus.OK).json(this.moviesService.findOne(+id));
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateMovieDto: UpdateMovieDto,
    @Res() res,
  ) {
    this.moviesService.update(+id, updateMovieDto);
    return res.status(HttpStatus.OK).json({ message: "Movie updated" });
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Res() res) {
    this.moviesService.remove(+id);
    return res.status(HttpStatus.OK).json({ message: "Movie deleted" });
  }
}
