import { Injectable } from '@nestjs/common';
import { ModelsService } from 'src/models/models.service';

@Injectable()
export class ProjectsService {
  constructor(private readonly modelService: ModelsService) {}
  async generateMeme(prompt: string, model: string): Promise<string> {
    const meme = await this.modelService.generate(prompt, model);
    return meme || 'Meme generation failed';
  }
}
