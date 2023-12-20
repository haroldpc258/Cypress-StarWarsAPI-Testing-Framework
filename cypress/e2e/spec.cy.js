/// <reference types="Cypress" />
import data from '../fixtures/data.json';
let commonResponse;

describe('Automating the SWAPI', () => {
  
  it('Check the second character information', () => {
    cy.request({
      method: 'GET',
      url: '/people/2',
    }).then((response) => {
      commonResponse = response;
      expect(response.status).to.eq(200);
      expect(response.body.skin_color).to.eq(data.secondCharacter.skinColor);
      expect(response.body.films).have.length(data.secondCharacter.filmsAmount);
    });
  });

  it('Check the information of the second movie in the last request', () => {
    cy.request({
      method: 'GET',
      url: commonResponse.body.films[1]
    }).then((response) => {
      commonResponse = response;
      let body = response.body;
      expect(response.status).to.eq(200);
      expect(body.release_date).to.match(/^\d{4}-\d{2}-\d{2}$/);
      expect(body.characters).has.length.above(1);
      expect(body.planets).has.length.above(1);
      expect(body.starships).has.length.above(1);
      expect(body.vehicles).has.length.above(1);
      expect(body.species).has.length.above(1);
    });
  });

  it('Check the information of the first planet in the last request', () => {
    cy.request({
      method: 'GET',
      url: commonResponse.body.planets[0]
    }).then((response) => {
      commonResponse = response;
      let body = response.body;
      expect(response.status).to.eq(200);
      expect(body.gravity).to.eq(data.planet.gravity);
      expect(body.terrain).to.eq(data.planet.terrain);
    });
  });

  it('Check the response being exactly the same from the previous one', () => {
    cy.request({
      method: 'GET',
      url: commonResponse.body.url
    }).its('body').should('deep.eq', commonResponse.body);
  });

  it('Check a invalid request', () => {
    cy.request({
      method: 'GET',
      url: '/films/7/',
      failOnStatusCode: false
    }).its('status').should('eq', 404);
  });
});