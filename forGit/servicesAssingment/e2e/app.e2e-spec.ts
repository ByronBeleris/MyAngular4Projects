import { ServicesAssingmentPage } from './app.po';

describe('services-assingment App', () => {
  let page: ServicesAssingmentPage;

  beforeEach(() => {
    page = new ServicesAssingmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
