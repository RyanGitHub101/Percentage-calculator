function roman(number) {
    if(number >= 1000) {return "M" + roman(number - 1000)}
    if(number >= 900) {return "CM" + roman(number - 900)}
    if(number >= 800) {return "DCCC" + roman(number - 800)}
    if(number >= 700) {return "DCC" + roman(number - 700)}
    if(number >= 600) {return "DC" + roman(number - 600)}
    if(number >= 500) {return "D" + roman(number - 500)}
    if(number >= 400) {return "CD" + roman(number - 400)}
    if(number >= 300) {return "CCC" + roman(number - 300)}
    if(number >= 200) {return "CC" + roman(number - 200)}
    if(number >= 150) {return "CL" + roman(number - 150)}

    if(number >= 100) {return "C" + roman(number - 100)}
    if(number >= 90) { return "XC" + roman(number - 90)}
    if(number >= 80) { return "LXXX" + roman(number - 80)}
    if(number >= 70) { return "LXX" + roman(number - 70) }
    if(number >= 60) { return "LX" + roman(number - 60) }
    if(number >= 50) {  return "L" + roman(number - 50) }
    if(number >= 40) { return "XL" + roman(number - 40) }
    if(number >= 30) { return "XXX" + roman(number - 30) }
    if(number >= 20) { return "XX" +roman(number - 20) }
    if(number >= 10) {   return "X" + roman(number - 10) }
    if(number >= 9) {   return "IX" + roman(number - 9) }
    if(number >= 8) {   return "VI" + roman(number - 8) }
    if(number >= 7) {  return "VII" + roman(number - 7) }
    if(number >= 6) {  return "VI" + roman(number - 6)  }
    if(number >= 5) {  return "V" + roman(number - 5)  }
    if(number >= 4) {  return "IV" + roman(number - 4)  }
    if(number >= 1) {  return "I" + roman(number - 1) }
    if(number < 1) {   return ""  }

};
