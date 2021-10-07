
describe("Check Insight Model Display and Hide Scenario", () => {
  it("Given I go to Cars Direct Page", () => {
    cy.visit("/");
    cy.viewport(1536, 1000);
    cy.get('#LogoAndNavWrapper > div.mainNaviLogo > div > strong > a', { timeout: 20000 }).should('be.visible');
    });

  it("And I click on New Cars button", () => {
    cy.contains('New Cars').click();
    });

  it("And I select Honda as the Make and Hit Find Your Next Car button", () => {
    cy.get('body > div.mainContent > div.mainContentTopDivide > div > div.CDCYWMMSearchSet.widget > div > div.mmSelectSlot > div > div.mmDropDown.makeDropDown > span').click();
    cy.contains('Honda').click();
    cy.get('body > div.mainContent > div.mainContentTopDivide > div > div.CDCYWMMSearchSet.widget > div > div.mmSelectSlot > div > div.ButtonGreen.findYourCar > span').click();
    });

    it("Then I verify that Insight is listed as one of the models", () => {
    cy.get('#Insight', { timeout: 20000 }).should('be.visible');
    });

    it("When I select Minivan as the Vehicle type from the dropdown", () => {
    cy.get('body > div.mainContent > div.mainContentTopDivide > div > div.contentLeftColumn > div > div.CDCYModelCards.widget > div.makeSegmentFilterSet > div.DropdownLight.filterSegment > span').click();
    cy.contains('Minivan/Van').click();
    });

    it("Then I verify that Insight is no longer listed as one of the models", () => {
    cy.get('#Insight', { timeout: 20000 }).should('not.exist');
  });
});