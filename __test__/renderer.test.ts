import { BodyRenderer } from 'src/entity/body.renderer';
import { FooterRenderer } from 'src/entity/footer.renderer';
import { HeaderRenderer } from 'src/entity/header.renderer';
import { MessageRenderer } from 'src/entity/message.renderer';

describe('RendererTests', () => {
  test('MessageRenderer uses correct sub renderers', () => {
    const spt = new MessageRenderer();

    const renderers = spt.subRenderers;

    expect(renderers.length).toBe(3);
    expect(renderers[0]).toBeInstanceOf(HeaderRenderer);
    expect(renderers[1]).toBeInstanceOf(BodyRenderer);
    expect(renderers[2]).toBeInstanceOf(FooterRenderer);
  });
});
