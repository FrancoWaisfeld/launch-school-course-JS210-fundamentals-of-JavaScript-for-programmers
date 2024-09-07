/*

explicit rules:
- create a function rot13
- rot13 function should take a string as an argument and return teh string
  that is transformed by the rot13 cipher
- if the character is a letter in the English alphabet, change it to the
  character 13 positions later in teh alphabat. (a becomes n)
- if you reach the end of the alphabet, return to the beginning. (o becomes b)
- letter transfromations preserve case. (A becomes N while a becomes n)
- do not modify non alphabetic characters

database: object

algorithm:
- declare and intialize a const `ROT13_TRANSFORMATIONS` that has uppercase and lowercase letters in the alphabet
  as keys and the according uppercase or lowercase letter that is 13 positions later in the alphabet
  as values.

- declare and initialize the variable `rot13String` to an an empty String
- iterate through the characters in the argument string
  - declare and intiailize a variable `rot13Char` to the value returned from the
    `ROT13_TRANSFORMATIONS` object when the character from the current iteration
    is provided as a key
  - if `rot13Char` is undefined
    - continue
  - concatenate `rot13Char` to `rot13String`
- return rot13String

*/

function rot13(string) {
  const ROT13_TRANSFORMATIONS = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M",
    a: "n",
    b: "o",
    c: "p",
    d: "q",
    e: "r",
    f: "s",
    g: "t",
    h: "u",
    i: "v",
    j: "w",
    k: "x",
    l: "y",
    m: "z",
    n: "a",
    o: "b",
    p: "c",
    q: "d",
    r: "e",
    s: "f",
    t: "g",
    u: "h",
    v: "i",
    w: "j",
    x: "k",
    y: "l",
    z: "m",
  };

  let rot13String = "";
  for (let index = 0; index < string.length; index++) {
    let rot13Char = ROT13_TRANSFORMATIONS[string[index]];

    if (rot13Char === undefined) {
      rot13String += string[index];
      continue;
    }

    rot13String += rot13Char;
  }

  return rot13String;
}

console.log(
  rot13(rot13("Teachers open the door, but you must enter by yourself."))
);
