export function Money(value, curr) {
  this.amount = value;
  this.currency = curr;
  this.inspect = function () {
    return `${this.amount} ${this.currency}`;
  };
}
