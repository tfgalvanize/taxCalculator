class TaxCalculatorController {
  constructor (taxCalculator) {
    this.calculator = taxCalculator
  }

  calcTotal (product) {
    return this.calculator.calculateTotalWithTax(product)
  }
}

module.exports = TaxCalculatorController
