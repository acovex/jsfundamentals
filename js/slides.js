"use strict";

function pruebas1() {
  console.log("string de salida por consola");
}

function pruebas2() {
  var sentido = prompt("El sentido de la vida es: ");
  if (sentido === "42") {
    alert("Ten viajero, toma tu toalla");
  } else {
    alert("No sabes nada Juan de las nieves");
  }
}

function variables2() {
  var variable1 = "Esta es mi variable";
  let _variable2 = 45;
  const $variable3 = {
    propiedad1: 12,
    propiedad2: "esto es la propiedad 2"
  };
  variable1 = 23;
  _variable2 = "le cambio el nombre";
  $variable3.nuevaPropiedad = "esto si podemos hacerlo";
  console.log(variable1, _variable2, $variable3);

  $variable3 = {
    nuevaPropiedad: "esto no se puede hacer"
  };
}

function valueAndTypes2() {
  var a;
  console.log(typeof a); // undefined
  a = "hello world";
  console.log(typeof a); // string
  a = 42;
  console.log(typeof a); // number
  a = true;
  console.log(typeof a); // boolean
  a = null;
  console.log(typeof a); // object , bug de JavaScript por como se comporta null
  a = undefined;
  console.log(typeof a); // undefined
  a = { b: "c" };
  console.log(typeof a); // object
  a = function() {
    return "a";
  };
  console.log(typeof a); // function
  a = Symbol("a");
  console.log(typeof a); // symbol
}

function valueUndefined() {
  var test; // variable declared, but not defined, ...
  // ... set to value of undefined
  var testObj = {};
  console.log(test); // test variable exists, but value not ...
  // ... defined, displays undefined
  console.log(testObj.myProp); // testObj exists, property does not, ...
  // ... displays undefined
  console.log(undefined == null); // unenforced type during check, displays true
  console.log(undefined === null); // enforce type during check, displays false
}

function valueNull() {
  console.log(null == undefined); // unenforced type during check, displays true
  console.log(null === undefined); // enforce type during check, displays false
  console.log(typeof null === "object"); // true
}

function string1() {
  var greeting = "Hello, \n World!";
  var anotherGreeting = "Greetings, people of Earth.";
  var anotherAnotherGreeting = "'Ultra Greetings'";
  console.log(greeting);
  console.log(anotherGreeting);
  console.log(anotherAnotherGreeting);
}

function string2() {
  var myString = "abcdefg";
  for (var positionString in myString) {
    console.log(
      "Position: " +
        positionString +
        ", value position: " +
        myString[positionString]
    );
  }
  console.log(myString.charAt(0));
  var charPosition0 = myString[0];
  console.log(charPosition0);
  // myString[0] = "f"; // esto no tendría ningún efecto y daria error en modo estricto
  console.log(myString);
}

function number1() {
  alert(0.94 - 0.01);
}

function number2() {
  console.log(345); // un 'integer', a pesar de que solo hay un tipo numérico en JavaScript
  console.log(34.5); // un número con coma flotante
  console.log(3.45e2); // otro número con coma flotante, que equivale a 345
  console.log(0b1011); //un binary integer que vale 11
  console.log(0o377); // un octal integer que equivale a 255
  console.log(0xff); // un hexadecimal integer que equivale a 255, los digitos reprensentados por ...
  // ... las letras A-F puden ser upper o lowercase

  console.log(5 / 0);
  Infinity; // posible infinito Ej.: 5/0
  console.log(NaN);
  NaN; // Not-A-Number value, devuelto como error en conversiones de string a number

  console.log(typeof Infinity);
  typeof Infinity; // returns 'number'
  console.log(typeof NaN);
  typeof NaN; // returns 'number'
}

function conversionesDeTipo() {
  // Conversion automatica
  console.log(true == 2); // false... true → 1 !== 2 ← 2
  console.log(false == 2); // false... false → 0 !== 2 ← 2
  console.log(true == 1); // true.... true → 1 === 1 ← 1
  console.log(false == 0); // true.... false → 0 === 0 ← 0
  console.log(true == "2"); // false... true → 1 !== 2 ← '2'
  console.log(false == "2"); // false... false → 0 !== 2 ← '2'
  console.log(true == "1"); // true.... true → 1 === 1 ← '1'
  console.log(false == "0"); // true.... false → 0 === 0 ← '0'
  console.log(false == ""); // true.... false → 0 === 0 ← ''
  console.log(false == NaN); // false... false → 0 !== NaN

  console.log(NaN == NaN); // false...... NaN is not equivalent to anything, including NaN.

  // Type checked comparison (no conversion of types and values)
  console.log(true === 1); // false...... data types do not match

  // Explicit type coercion
  console.log(true === !!2); // true.... data types and values match
  console.log(true === !!0); // false... data types match, but values differ
  console.log(1 ? true : false); // true.... only ±0 and NaN are “falsy” numbers
  console.log("0" ? true : false); // true.... only the empty string is “falsy”
  console.log(Boolean({})); // true.... all objects are “truthy”
}

function symbolExp() {
  var x = Symbol(1);
  var y = Symbol(1);
  console.log(x == y); // false
  var arr = [x, y];
  arr[x] = 1;
  arr[y] = 2; // x and y are unique keys for the array arr
  console.log(arr[x]); // displays 1
  console.log(arr[y]); // displays 2
  x = Symbol(3);
  console.log(arr); // displays [Symbol(1),Symbol(1)]
  console.log(arr[x]); // is now undefined
  x = Symbol(1);
  console.log(arr[x]); // undefined
}

function objectExp() {
  var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    describe: function() {
      console.log(this.firstName, this.lastName, this.age, this.eyeColor);
    }
  };
  console.log(person.firstName);
  console.log(person["lastName"]);
  person.describe();
}

function codeBlocks1() {
  function myFunction() {
    // test 1
    return {
      status: "ok"
    };
  }
  console.log(myFunction());
}

function operAsignacion() {
  var pitufo = "Esto es un pitufo";
  alert(pitufo);
  pitufo = 3; // Ahora pitufo va a ser un número
  alert(pitufo);
  pitufo = {
    altura: 0.1,
    color: "azul"
  }; // Ahora pitufo va a ser un objeto
  alert(
    "Soy un pitufo y mido " +
      pitufo.altura +
      " metros y soy de color " +
      pitufo.color
  );
}

function operAdicion() {
  var a = 2;
  a += 3;
  alert(a);
}

function operSubstraccion() {
  var a = 52;
  a -= 15;
  alert(a);
}

function operMult() {
  var a = 5;
  a *= 6;
  alert(a);
}

function operDiv() {
  var a = 12;
  a /= 5;
  alert(a);
}

function operIncr() {
  var a = 2;
  a++;
  alert(a);
}

function operDecr() {
  var a = 2;
  a--;
  alert(a);
}

function objProperties() {
  var pitufo = {
    altura: 0.1,
    color: "azul",
    describir: function() {
      alert("Altura: " + this.altura + ", color: " + this.color);
    }
  };
  pitufo.describir();
  pitufo.altura = 2;
  pitufo["color"] = "rojo";
  pitufo.describir();
}

function logicAnd1() {
  var a = 3;
  var b = 4;
  alert(a && b ? "¡Existen!" : "Alguno no existe");
}

function logicAnd2() {
  var a = 3;
  var b = null;
  alert(a && b ? "¡Existen!" : "Alguno no existe");
}

function logicOr1() {
  var a = 3;
  var b = null;
  alert(a || b);
}

function logicOr2() {
  var a = null;
  var b = 5;
  alert(a || b);
}

function logicNot() {
  var a = true;
  var b = "perro";
  var c = 0;
  alert(!a + " " + !b + " " + !c);
}

function if1() {
  var totalBanco = document.getElementById("totalBanco").value;
  var precioProducto = document.getElementById("precioProducto").value;
  if (totalBanco && precioProducto) {
    totalBanco = Number(totalBanco);
    precioProducto = Number(precioProducto);
    if (totalBanco < precioProducto) {
      alert(
        "Producto muy caro, no puedes comprarlo porque no tienes dinero en el banco"
      );
    } else if (totalBanco === precioProducto) {
      alert("Puedes comprarlo pero te quedas sin blanca");
    } else {
      alert(
        "Puedes comprarlo sin problema. Te quedaría en la cuenta " +
          (totalBanco - precioProducto).toFixed(2)
      );
    }
  } else {
    alert("No has rellenado uno de los campos");
  }
}

function changePitufo() {
  var colorPitufoReal = document.getElementById("colorRealPitufo").value;
  if (colorPitufoReal === "azul") {
    document.getElementById("colorRealPitufo").value = "rojo";
    document.getElementById("fotoPitufo").src = "./img/pitufo_rojo.jpg";
  } else {
    document.getElementById("colorRealPitufo").value = "azul";
    document.getElementById("fotoPitufo").src = "./img/pitufo_azul.jpg";
  }
}

function switch1() {
  var inputsForm = document.getElementById("colorPitufoForm").elements;
  var colorPitufoReal = inputsForm["colorRealPitufo"].value;
  var colorPitufoElegido = inputsForm["colorPitufo"].value;
  switch (colorPitufoElegido) {
    case "azul":
      if (colorPitufoReal === "azul") {
        alert("¡Correcto! Los pitufos siempre han sido azules");
      } else {
        alert("¡Error! Este es un raro caso de un pitufo malvado");
      }
      break;
    case "rojo":
      if (colorPitufoReal === "rojo") {
        alert("¡Correcto! Este pitufo es satán en forma de hongo andante");
      } else {
        alert(
          "¡Error! Los pitufos no son rojos, en todo caso el gorro de papa pitufo"
        );
      }
      break;
    default:
      alert("Lol, es imposible que un pitufo sea de este color");
      break;
  }
}

function whileVsDoWhile1() {
  var numOfCustomers = 10;
  var textCustomer = "Texto de while: \n";
  while (numOfCustomers > 0) {
    textCustomer += "Hay " + numOfCustomers + " cliente/s \n";
    numOfCustomers = numOfCustomers - 1;
  }
  textCustomer += "Texto de do while: \n";
  // versus:
  numOfCustomers = 10;
  do {
    textCustomer += "Hay " + numOfCustomers + " cliente/s \n";
    numOfCustomers = numOfCustomers - 1;
  } while (numOfCustomers > 0);
  alert(textCustomer);
}

function whileVsDoWhile2() {
  var numOfCustomers = 10;
  var textCustomer = "Texto de while: \n";
  while (false) {
    textCustomer += "Hay " + numOfCustomers + " cliente/s \n";
    numOfCustomers = numOfCustomers - 1;
  }
  textCustomer += "Texto de do while: \n";
  // versus:
  numOfCustomers = 10;
  do {
    textCustomer += "Hay " + numOfCustomers + " cliente/s \n";
    numOfCustomers = numOfCustomers - 1;
  } while (false);
  alert(textCustomer);
}

function for1() {
  for (var i = 0; i <= 9; i = i + 1) {
    console.log(i);
  }
  // 	bucle for: 0 1 2 3 4 5 6 7 8 9
  console.log("esto es igual que el siguiente bucle while");
  var j = 0;
  while (j <= 9) {
    console.log(j);
    j = j + 1;
  } // 0 1 2 3 4 5 6 7 8 9
}

function forIn1() {
  var miObjeto = {
    valorPrimero: 4545,
    valorSegundo: 77885
  };
  var miArray = [1212, 455, 5656];
  for (var nombrePropiedad in miObjeto) {
    console.log(
      "Objeto propiedad: " +
        nombrePropiedad +
        ", Objeto valor: " +
        miObjeto[nombrePropiedad]
    );
  }
  for (var posicionArray in miArray) {
    console.log(
      "Array posición: " +
        posicionArray +
        ", Array valor: " +
        miArray[posicionArray]
    );
  }
}

function functionsExp2() {
  printAmount();
  function printAmount() {
    alert(amount ? amount.toFixed(2) : "Aún no está definido amount");
  }
  var amount = 99.99;
  printAmount(); // 99.99

  amount = amount * 2;
  printAmount(); // 199.98
}

function functionsExp3() {
  var TAX_RATE = 0.08;
  function calculateFinalPurchaseAmount(amt) {
    // calcula el montante con los impuestos
    amt = amt + amt * TAX_RATE;
    // regresa el nuevo montante
    return amt;
    // tb seria valido return (amt + (amt * TAX_RATE));
  }
  var amount = 99.99;
  amount = calculateFinalPurchaseAmount(amount);
  alert(amount.toFixed(2)); // 107.99
}

function functionsExp4() {
  var TAX_RATE = 0.08;
  function calculateFinalPurchaseAmount(amt, functionAmt) {
    // Ejecuamos la función que se le ha pasado como parámetro
    return functionAmt(amt);
  }
  var amount = 99.99;
  amount = calculateFinalPurchaseAmount(amount, function(amt) {
    return amt + amt * TAX_RATE;
  });
  alert(amount.toFixed(2)); // 107.99
}

function scope1() {
  var imagenScope = document.getElementById("scopeImagen");
  var srcToCheck = imagenScope.src;
  if (srcToCheck.indexOf("question.png") !== -1) {
    imagenScope.src = "./img/phones.png";
    imagenScope.width = "600";
  }
}

function scope2() {
  function pedirMovilTiendaApple() {
    var movil = {
      modelo: "iPhone 11 Pro Max",
      precio: 1259
    };
    alert("Tome su móvil " + movil.modelo + ". Vale " + movil.precio + "€.");
  }

  function pedirMovilTiendaXiaomi() {
    var movil = {
      modelo: "Xiaomi Mi Note 10",
      precio: 549
    };
    alert("Tome su móvil " + movil.modelo + ". Vale " + movil.precio + "€.");
  }
  pedirMovilTiendaXiaomi();
  pedirMovilTiendaApple();
}

function hoisting1() {
  var a = 2;
  foo(); // works because `foo()`
  // declaration is "hoisted"
  function foo() {
    a = 3;
    console.log(a); // 3
    var a; // declaration is "hoisted"
    // to the top of `foo()`
  }
  console.log(a); // 2
}

function scope3() {
  function outer() {
    var a = 1;
    function inner() {
      var b = 2;
      // podemos acceder a ambas `a` y `b` aqui
      alert(a + b); // 3
    }
    inner();
    // solo podemos acceder a `a` aqui
    alert(a); // 1
  }
  outer();
}

function arrays1() {
  var myArray = [0, 1, , , 4, 5];
  console.log(myArray);
  console.log(myArray[1]);
  console.log(myArray["1"]);
  console.log(myArray["01"]);
  // array with length 6 and 6 elements, ...
  // ... including 2 undefined elements
  myArray = new Array(0, 1, 2, 3, 4, 5);
  console.log(myArray);
  // array with length 6 and 6 elements
  myArray = new Array(365);
  console.log(myArray);
  // an empty array with length 365
}

function constr1() {
  // Constructor function for Person objects
  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English";

    this.seeProperties = seeProperties;

    function seeProperties() {
      alert(
        "firstName: " +
          this.firstName +
          ", lastName: " +
          this.lastName +
          ", age:" +
          this.age +
          ", eyeColor:" +
          this.eyeColor +
          ", nationality:" +
          this.nationality
      );
    }
  }

  // Create 2 Person objects
  var myFather = new Person("John", "Doe", 50, "blue");
  var myMother = new Person("Sally", "Rally", 48, "green");

  myFather.seeProperties();
  myMother.seeProperties();
  alert(myFather instanceof Person);
}

function prototypeExpl() {
  function MiClase(esto, loOtro) {
    this.esto = esto;
    this.loOtro = loOtro;
  }
  MiClase.prototype.muestra = function() {
    console.log(
      "muestra en prototype",
      "esto ",
      this.esto,
      ", lo otro ",
      this.loOtro
    );
  };
  MiClase.muestraStatico = function() {
    console.log(
      "muestraStatico ",
      "esto ",
      this.esto,
      ", lo otro ",
      this.loOtro
    );
  };
  var a = new MiClase("xd", 42);
  a.muestra();
  MiClase.muestraStatico();
}
