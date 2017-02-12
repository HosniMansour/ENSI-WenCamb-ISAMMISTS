import { SoutTounsiPage } from './app.po';

describe('sout-tounsi App', function() {
  let page: SoutTounsiPage;

  beforeEach(() => {
    page = new SoutTounsiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
