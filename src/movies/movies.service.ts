import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movies } from './entities/movies.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movies)
    private movieRepository: Repository<Movies>,
  ) {}

  create(createMovieDto: CreateMovieDto) {
    this.movieRepository.save(createMovieDto);
    return;
  }

  findAll() {
    return this.movieRepository.find();
  }

  findOne(id: number) {
    return this.movieRepository.findOneBy({ id: id });
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    this.movieRepository.update(id, updateMovieDto);
    return;
  }

  remove(id: number) {
    this.movieRepository.delete(id);
    return;
  }
}
