import { ClusterpicsPage } from './app.po';

describe('clusterpics App', () => {
  let page: ClusterpicsPage;

  beforeEach(() => {
    page = new ClusterpicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
