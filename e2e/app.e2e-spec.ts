import { CalcPage } from './app.po';

describe('calc App', () => {
  let page: CalcPage;

  beforeEach(() => {
    page = new CalcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to c!!');
  });
});
