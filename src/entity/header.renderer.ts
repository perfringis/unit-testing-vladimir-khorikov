import { Message } from './message';
import { Renderer } from './renderer.interface';

export class HeaderRenderer implements Renderer {
  render(message: Message): string {
    return `<h1>${message.header}</h1>`;
  }
}
