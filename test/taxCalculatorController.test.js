/* eslint-env mocha */

const sinon = require('sinon')
const expect = require('chai').expect
const TaxCalculatorController = require('../app/taxcalc/taxCalcController')
const Product = require('../app/product/product')
const ProductType = require('../app/product/productType')

describe('TaxCalculatorController', () => {
  it('#calcTotal calculates the total price of a product with tax', () => {
    const prod1 = new Product('music CD', 14.99, ProductType.STANDARD)
    const mockTotalWithTax = 16.49

    const stubCalculator = sinon.stub().returns(mockTotalWithTax)

    let expected = stubCalculator()

    let result = 0.0

    const calculator = {
      calculateTotalWithTax (args) {
        result = mockTotalWithTax
      }
    }

    const mockCalculator = sinon.mock(calculator)

    new TaxCalculatorController(mockCalculator).calcTotal(prod1)
    // mockCalculator.expects('calculateTotalWithTax').once().return(mockTotalWithTax)
    mockCalculator.expects('calculateTotalWithTax').withArgs(prod1).returns(mockTotalWithTax)
    expect(mockCalculator.calledWith(prod1)).to.be.true
    expect(result).to.eq(expected)
    mockCalculator.verify()
  })
})
