import { UsingServicesPage } from './app.po';

describe('using-services App', () => {
  let page: UsingServicesPage;

  beforeEach(() => {
    page = new UsingServicesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
