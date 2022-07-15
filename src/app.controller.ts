import { Controller, Get, Redirect, Res } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect("/movies/all")
  getHello(): string {
    return this.appService.getHello();
  }
}
