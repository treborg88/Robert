import data from '../page-objects/data.json'
import CalculadoraPage from '../page-objects/calculadora-po'

describe('Validar funciones de la calculadora', () => {

  let numA = data.num1, numB = data.num2;

  beforeEach("Ir a la pagina ", () => {
    const page = new CalculadoraPage();
    page.visit();
    page.insertarNumeros(numA, numB);
  })

  it('Validar Add', () => {
    const page = new CalculadoraPage();
    page.insertarOperacion(0);
    page.clickBtnCalculo();
    page.mostrarResultado()
  })

  it('Validar Substract', () => {
    const page = new CalculadoraPage();
    page.insertarOperacion(1);
    page.clickBtnCalculo();
    page.mostrarResultado()
  })

  it('Validar Multiply', () => {
    const page = new CalculadoraPage();
    page.insertarOperacion(2);
    page.clickBtnCalculo();
    page.mostrarResultado()
  })

  it('Validar Divide', () => {
    const page = new CalculadoraPage();
    page.insertarOperacion(3);
    page.clickBtnCalculo();
    page.mostrarResultado()
  })

  it('Validar Concatenate', () => {
    const page = new CalculadoraPage();
    page.insertarOperacion(4);
    page.clickBtnCalculo();
    page.mostrarResultado()
  })
})