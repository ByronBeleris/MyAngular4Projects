import { NumbersGamePage } from './app.po';

describe('numbers-game App', () => {
  let page: NumbersGamePage;

  beforeEach(() => {
    page = new NumbersGamePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
