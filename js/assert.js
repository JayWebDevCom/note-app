function Assert(subject, testName, expectation) {
  this._subject = subject;
  this._testName = testName;
  this._expectation = expectation;
}

Assert.prototype.isTrue = function () {
  if (this._subject !== true) {
    throw new Error(this._testName + " failed!");
  } else {
    console.log(this._testName + " passed!");
  }
};

Assert.prototype.isEqual = function () {
  if (this._subject !== this._expectation) {
    throw new Error(this._testName + " failed!");
  } else {
    console.log(this._testName + " passed!");
  }
};

Assert.prototype.isTypeOf = function () {
  if (!(this._subject instanceof this._expectation)) {
    throw new Error(this._testName + " failed!");
  } else {
    console.log(this._testName + " passed!");
  }
};
