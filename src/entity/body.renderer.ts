import { Message } from './message';
import { Renderer } from './renderer.interface';

export class BodyRenderer implements Renderer {
  render(message: Message): string {
    return `<b>${message.body}</b>`;
  }
}
