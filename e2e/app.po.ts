import { browser, by, element } from 'protractor';

export class CalcPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('c-root h1')).getText();
  }
}
