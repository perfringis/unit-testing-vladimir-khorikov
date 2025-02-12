import { BodyRenderer } from './body.renderer';
import { FooterRenderer } from './footer.renderer';
import { HeaderRenderer } from './header.renderer';
import { Message } from './message';
import { Renderer } from './renderer.interface';

export class MessageRenderer implements Renderer {
  subRenderers: Renderer[] = [];

  constructor() {
    this.subRenderers = [
      new HeaderRenderer(),
      new BodyRenderer(),
      new FooterRenderer(),
    ];
  }

  render(message: Message): string {
    return this.subRenderers
      .map((renderer) => renderer.render(message))
      .join('');
  }
}
