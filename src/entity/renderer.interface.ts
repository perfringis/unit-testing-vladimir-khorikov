import { Message } from './message';

export interface Renderer {
  render(message: Message): string;
}
