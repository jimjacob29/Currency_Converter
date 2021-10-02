export function Money(value, curr) {
  this.amount = value;
  this.currency = curr;
  this.inspect = function () {
    return `${this.amount} ${this.currency}`;
  };
  this.changeAmount = function (val) {
    this.amount = val;
  };
  this.changeCurrency = function (val) {
    this.currency = val;
  };
  this.getAmount = function () {
    return this.amount;
  };
  this.getCurrency = function () {
    return this.currency;
  };
}
