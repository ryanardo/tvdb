import { TvdbPage } from './app.po';

describe('tvdb App', () => {
  let page: TvdbPage;

  beforeEach(() => {
    page = new TvdbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
