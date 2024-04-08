import { useRouter } from 'next/router';

export default function testPreviousButton(path: string) {
  it('checks the "PREVIOUS" button directs the previous page', () => {
    cy.visit(`/calculator/${path}`);
    // We need to ensure that windown is loaded
    cy.window().then((win: any) => {
      // We need to ensure that paths are available
      if (win.next.router.useRouter) {
        const router = useRouter();

        cy.stub(router, 'back').as('routerBack');
        cy.get('[data-cy="previous-button"]').should('be.visible').click();
        cy.get('@routerBack').should('have.been.calledOnce');
      }
    });
  });
}