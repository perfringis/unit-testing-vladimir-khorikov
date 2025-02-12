import * as fs from 'node:fs/promises';
import * as path from 'node:path';

describe('RendererTests', () => {
  test('MessageRenderer is implemented correctly', async () => {
    const source = await readFile(
      path.resolve(__dirname, '../src/entity/message.renderer.ts'),
    );

    expect(source).toEqual(
      `import { BodyRenderer } from './body.renderer';
import { FooterRenderer } from './footer.renderer';
import { HeaderRenderer } from './header.renderer';
import { Message } from './message';
import { Renderer } from './renderer.interface';

export class MessageRenderer implements Renderer {
  readonly subRenderers: Renderer[] = [];

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
`,
    );
  });

  const readFile = async (path: string) => {
    try {
      return await fs.readFile(path, {
        encoding: 'utf8',
      });
    } catch (error) {
      console.error(error);
      return '';
    }
  };
});
