import { NestedPage } from './app.po';

describe('nested App', () => {
  let page: NestedPage;

  beforeEach(() => {
    page = new NestedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
