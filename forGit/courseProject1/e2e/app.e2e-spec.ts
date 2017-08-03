import { CourseProject1Page } from './app.po';

describe('course-project1 App', () => {
  let page: CourseProject1Page;

  beforeEach(() => {
    page = new CourseProject1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
