function updateErrorSection (e) {
  console.log(e.message)
  var newli = document.createElement("li");
  var text = document.createTextNode(e.message);
  newli.appendChild(text);
  document.getElementById("testOutput").appendChild(newli)
}

function Assert(subject, testName, expectation) {
  this._subject = subject;
  this._testName = testName;
  this._expectation = expectation;
}

Assert.prototype.isTrue = function () {
  if (this._subject !== true) {
    throw new Error("Failed - " + this._testName);
  } else {
    console.log("Passed - " + this._testName);
  }
};

Assert.prototype.isEqual = function () {
  if (this._subject !== this._expectation) {
    throw new Error("Failed - " + this._testName);
  } else {
    console.log("Passed - " + this._testName);
  }
};

Assert.prototype.isTypeOf = function () {
  if (!(this._subject instanceof this._expectation)) {
    throw new Error("Failed - " + this._testName);
  } else {
    console.log("Passed - " + this._testName);
  }
};

Assert.prototype.isTypeOf2 = function () {
    if (!((typeof this._subject) === this._expectation)) {
      throw new Error("Failed - " + this._testName);
    } else {
      console.log("Passed - " + this._testName);
    }
};
