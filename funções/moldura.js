const readline = require('readline-sync');

const frase = readline.question('\nDigite uma frase: ');
const ch = '█';

for(let i=0 ; i<frase.lenght ; i++){
    process.stdout.write(ch);
}
