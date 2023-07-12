class A {
  #prop1
  #prop2
  #length
  constructor(prop1, prop2, length) {
    this.#prop1 = prop1;
    this.#prop2 = prop2;
    this.#length = length;
  }
  output() {
    return {
      prop1: this.#prop1,
      prop2: this.#prop2,
      length: this.#length
    }
  }
}
class B {
  #prop1
  #prop2
  #length
  constructor(prop1, prop2, length) {
    this.#prop1 = prop1;
    this.#prop2 = prop2;
    this.#length = length;
  }
  output() {
    return {
      prop1: this.#prop1,
      prop2: this.#prop2,
      length: this.#length
    }
  }
}
class C {
  #prop1
  #prop2
  #length
  constructor(prop1, prop2, length) {
    this.#prop1 = prop1;
    this.#prop2 = prop2;
    this.#length = length;
  }
  output() {
    return {
      prop1: this.#prop1,
      prop2: this.#prop2,
      length: this.#length
    }
  }
}

class ABC {
  #object;
  constructor(objectToChoose) {
    this.#object = objectToChoose;
  }
  createObject(prop1, prop2, length) {
    switch(this.#object) {
      case "object 1":
        return new A(prop1, prop2, length);
        break;
      case "object 2":
        return new B(prop1, prop2, length);
        break;
      case "object 3":
        return new C(prop1, prop2, length);
        break;
      default:
        return null;
        break;
    }
  }
  init() {
    return {
      object: this.createObject(),
    };
  }
}

const test = new ABC("object 1");

let prop1 = 10,
    prop2 = 12,
    length = 14;

let object = test.createObject(prop1, prop2, length);

/* ABSTRACT DESIGN PATTERN */

