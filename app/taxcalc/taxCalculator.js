const ProductType = require('../product/productType')

class TaxCalculator {
  calculateTotalWithTax (product) {
    let taxRate = 0.0

    taxRate = product.imported ? product.type.rate + ProductType.IMPORT.rate : product.type.rate
    taxRate = Number(Math.round(taxRate + 'e2') + 'e-2')

    if (taxRate > 0) {
      taxRate = Number((Math.ceil(taxRate * 20) / 20).toFixed(2))
    }

    let total = Number(Math.round(product.price + (product.price * taxRate) + 'e2') + 'e-2')

    return total
  }
}

module.exports = TaxCalculator
