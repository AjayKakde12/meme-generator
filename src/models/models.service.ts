import { GoogleGenAI } from '@google/genai';
import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class ModelsService {
  private readonly ai: GoogleGenAI;
  constructor() {
    this.ai = new GoogleGenAI({
      apiKey: readFileSync('D:/NestJs/gen.txt', 'utf-8').trim(),
    });
  }

  async generate(prompt: string, model: string): Promise<string> {
    const response = await this.ai.models.generateContent({
      model,
      contents: prompt,
    });
    return response.text || '';
  }
}
