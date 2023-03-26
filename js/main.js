function calc (x,y) {
    sum=x+y;
    sub = x-y;
    multip = x*y;
    if (sum>0) {
        console.log("Wynik dodawania wynosi: " + sum);
        }else if (sum<0) {
            console.log("Wynik jest nieprawidłowy");
    }
    if (sub>0) {
        console.log("Wynik dodawania wynosi: " + sub);
        }else if (sub<0) {
            console.log("Wynik jest nieprawidłowy");
    }
    if (multip>0) {
        console.log("Wynik dodawania wynosi: " + multip);
        }else if (multip<0) {
            console.log("Wynik jest nieprawidłowy");
    }
}

calc(-3,4);
