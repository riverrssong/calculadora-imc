let fileName = "tiposPrimitivos.js";

function showContent(varName, varValue) {
  console.log(`O conteúdo da variável de nome '${varName}' é:
  >> ${varValue}
Seu tipo é:
  >> ${typeof varValue}

-----------------------------------------------------
`);
}

///////////////////////////
//
// Tipo primitivo 'string'
//

let str1 = "Minha STRING";
showContent("str1", str1);

let str2 = "Minha STRING";
showContent("str2", str2);

let str3 = 'Minha "STRING"';
showContent("str3", str3);

let str4 = "Minha 'STRING'";
showContent("str4", str4);

let str5 = 'Minha "STRING"';
showContent("str5", str5);

let str6 = "Minha 'STRING'";
showContent("str6", str6);

let str7 = "Minha 'STRING'";
showContent("str7", str7);

let str8 = "Minha 'STRING'";
showContent("str8", str8);

//
// Uso de CARACTERES ESPECIAIS
//

let str9 = "Esta 'STRING' possui o caracter\nespecial de 'quebra de linha'";
showContent("str9", str9);

///////////////////////////
//
// Tipo primitivo 'number'
//

let val1 = 2;
showContent("val1", val1);

let val2 = 3.14;
showContent("val2", val2);

///////////////////////////
//
// Tipo primitivo 'bigint'
//

let val3 = 2n;
showContent("val3", val3);

//
// O tipo 'bigint' só pode ser aplicado a valores inteiros
//

// let val4 = 3.14n;
// showContent("val4", val4);

///////////////////////////
//
// Tipo primitivo 'boolean'
//

let val5 = true;
showContent("val5", val5);

let val6 = false;
showContent("val6", val6);

///////////////////////////
//
// Tipo primitivo 'undefined'
//

let val7;
showContent("val7", val7);

///////////////////////////
//
// NOT DEFINED (ERROR)
//

// showContent("val8", val8);

///////////////////////////
//
// Tipo primitivo 'undefined'
//

let val9 = null;
showContent("val9", val9);
