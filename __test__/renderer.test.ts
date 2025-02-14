import { Message } from 'src/entity/message';
import { MessageRenderer } from 'src/entity/message.renderer';

describe('RendererTests', () => {
  test('rendering a message', () => {
    const spt = new MessageRenderer();

    const message = new Message();
    message.header = 'h';
    message.body = 'b';
    message.footer = 'f';

    const html = spt.render(message);

    expect(html).toBe('<h1>h</h1><b>b</b><i>f</i>');
  });
});
