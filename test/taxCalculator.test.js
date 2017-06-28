/* eslint-env mocha */

const expect = require('chai').expect
const sinon = require('sinon')
const TaxCalculator = require('../app/taxCalc/taxCalculator')
const Product = require('../app/product/product')
const ProductType = require('../app/product/productType')

describe('TaxCalculator', () => {
  it('#calculateTax: calculates the tax of a product', () => {
    const taxCalc = new TaxCalculator()
    const prod1 = new Product('book', 12.49, ProductType.BOOK)
    const prod2 = new Product('music CD', 14.99, ProductType.STANDARD)
    const prod3 = new Product('chocolate bar', 0.85, ProductType.FOOD)

    let prod1Tax = taxCalc.calculateTotalWithTax(prod1)
    let prod2Tax = taxCalc.calculateTotalWithTax(prod2)
    let prod3Tax = taxCalc.calculateTotalWithTax(prod3)

    expect(prod1Tax).to.equal(12.49)
    expect(prod2Tax).to.equal(16.49)
    expect(prod3Tax).to.equal(0.85)
  })

  it('#calculateTax: calculates the tax of imported products', () => {
    const taxCalc = new TaxCalculator()
    const prod1 = new Product('imported box of chocolates', 10.00, ProductType.FOOD, true)
    const prod2 = new Product('imported bottle of perfume', 47.50, ProductType.STANDARD, true)

    let prod1Tax = taxCalc.calculateTotalWithTax(prod1)
    let prod2Tax = taxCalc.calculateTotalWithTax(prod2)

    expect(prod1Tax).to.equal(10.50)
    expect(prod2Tax).to.equal(54.63)
  })
})
