import { Injectable } from '@nestjs/common';
import { ModelsService } from 'src/models/models.service';

@Injectable()
export class ProjectsService {
  constructor(private readonly modelService: ModelsService) {}
  async generateMeme(prompt: string, model: string): Promise<string> {
    prompt += `You are an expert meme page admin. Create a meme: {prompt}. 
          
               STRICT RULES TO FOLLOW:
               DO NOT ANSWER ANY GENERAL KNOWLEDGE QUESTION.
               Input: What is the capital of France? Output: Not Valid Input.
               Input: What is color of a sky? Output: Not Valid Input.
               Input: Who won yesterday? Output: Not Valid Input.`;
    const meme = await this.modelService.generate(prompt, model);
    return meme || 'Meme generation failed';
  }
}
