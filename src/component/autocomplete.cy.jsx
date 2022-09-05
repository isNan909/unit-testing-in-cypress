import Autocomplete from './autocomplete';
import countries from '../data/countries';

describe('Test the autocomplete functionality', () => {
  beforeEach(() => {
    cy.mount(<Autocomplete countries={countries} />);
  })

  it('mount the component', () => {
    cy.get('[data-cy="heading"]').contains('Search your country:');
    cy.get('input[type="text"]').should('have.value', '');
    cy.get('[data-cy="suggestion-list"]').should('not.exist')
  })
})