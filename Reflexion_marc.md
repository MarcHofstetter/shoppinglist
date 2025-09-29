Reflexion:

## Aufbau 
Die pipeline ist in drei jobs unterteilt:
1. Linting, prüft die Codequalität
2. Testing, führt die Tests aus 
3. Deployment, ist hier nur als beispiel und macht kein richtiges deployment



## Verständnis

- **on push**, branches, wird gebraucht um wenn auf den branch gepusht wird die pipeline zu starten
- **runs on**, definiert die Umgebung in der die Jobs ausgeführt werden
- **lint**, der erste job prüft die Codequalität
- **test**, der zweite job führt die tests aus
- **deploy**, der dritte job ist ein platzhalter für deployment
- **needs**, es muss lint und test muss erfolgreich sein bevor deploy ausgeführt wird


## Kritik
- Die Pipeline ist sehr langsam, da die node modules jedes mal neu installiert werden.
- Wenn das linting failed werden die tests auch nicht ausgeführt, was nicht optimal ist.
- Das Deployment ist nur als beispiel drin und macht kein richtiges deployment


## Verbesserungsvorschläge
- Caching der node modules um die pipeline zu beschleunigen
- Tests sollten auch ausgeführt werden wenn das linting failed ist, um nicht nochmals evt eine gefailete pipeline zu erhalten.
- Richtiges deployment einbauen.