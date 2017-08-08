import { RecapForIfPage } from './app.po';

describe('recap-for-if App', () => {
  let page: RecapForIfPage;

  beforeEach(() => {
    page = new RecapForIfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
