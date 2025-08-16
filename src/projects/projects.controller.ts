import { Body, Controller, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { memeInterface } from './interfaces/projectInterface';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectService: ProjectsService) {}
  @Post('/generate-meme')
  async generateMemeController(@Body() body: memeInterface): Promise<string> {
    const meme = await this.projectService.generateMeme(
      body.prompt,
      body.model,
    );
    console.log(body);
    return meme || '';
  }
}
