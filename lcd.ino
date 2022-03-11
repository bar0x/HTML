#include <LiquidCrystal.h>
//inizializzo il pin RS, E, D4; D5, D6, D7
LiquidCrystal Davide(12, 11, 8, 7, 6, 5);




void setup() {
  Serial.begin(9600);
  Davide.begin(16, 2); //grandezza display (16 colonne e 2 righe)
}

void loop() {
  // posiziono il cursore nella seconda riga 5 colonna
  Davide.setCursor(2,5);
  Davide.print("ciao, Davide");

}
