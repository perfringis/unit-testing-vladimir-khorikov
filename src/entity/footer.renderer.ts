import { Message } from './message';
import { Renderer } from './renderer.interface';

export class FooterRenderer implements Renderer {
  render(message: Message): string {
    return `<i>${message.footer}</i>`;
  }
}
