class CalculadoraPage {
    visit() {
        cy.visit('https://testsheepnz.github.io/BasicCalculator.html');
    }

    insertarNumeros(numA, numB) {
        cy.get('#number1Field').type(numA)
        cy.get('#number2Field').type(numB)
    }

    insertarOperacion(index) {
        cy.get('#selectOperationDropdown').select(index);
    }

    clickBtnCalculo() {
        cy.get('#calculateButton').click();
    }

    mostrarResultado() {
        let result = cy.get('[name = "numberAnswer"]').invoke('text');
        cy.log(result);
        console.log(result);
    }
}

export default CalculadoraPage;