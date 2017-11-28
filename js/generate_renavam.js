function generateRandom() {
    var randomNumber = Math.floor((Math.random() * 9) + 0);
    return randomNumber;
}

function renavam() {
    var n0 = generateRandom();
    var n1 = generateRandom();
    var n2 = generateRandom();
    var n3 = generateRandom();
    var n4 = generateRandom();
    var n5 = generateRandom();
    var n6 = generateRandom();
    var n7 = generateRandom();
    var n8 = generateRandom();
    var n9 = generateRandom();

    var moduloOnze = (((n0*3)+(n1*2)+(n2*9)+(n3*8)+(n4*7)+(n5*6)+(n6*5)+(n7*4)+(n8*3)+(n9*2))*10)%11;

    if(moduloOnze == 10) {
        moduloOnze = 0;
    }
    var mascaraRenavam = document.querySelector("#maskRenavam");
    if (mascaraRenavam.checked)
        return ''+n0+n1+n2+n3+n4+n5+n6+n7+n8+n9+'-'+moduloOnze;
    else
        return ''+n0+n1+n2+n3+n4+n5+n6+n7+n8+n9+moduloOnze;
}

function generate() {
    var numeroRenavam = document.querySelector("#numberRenavam");
    numeroRenavam.value = renavam();
    console.log(renavam())
}