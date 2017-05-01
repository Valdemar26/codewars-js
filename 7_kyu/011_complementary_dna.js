/**
 * 011_complementary_dna.js
 * https://www.codewars.com/kata/complementary-dna/
 *
 */

/**
 * Deoxyribonucleic acid (DNA) is a chemical found in the nucleus
 * of cells and carries the "instructions" for the development and
 * functioning of living organisms.
 *
 * If you want to know more http://en.wikipedia.org/wiki/DNA
 *
 * In DNA strings, symbols "A" and "T" are complements of each other,
 * as "C" and "G". You have function with one side of the DNA
 * you need to get the other complementary side.
 * DNA strand is never empty or there is no DNA at all.
 *
 * for example:
 *            DNAStrand ("ATTGC") # return "TAACG"
 *            DNAStrand ("GTAT") # return "CATA"
 *
 */

 function DNAStrand(dna){
   //your code here
   var result = '';
   for(var i = 0; i < dna.length; i++) {
     if (dna[i] == 'A') {
       result += dna[i].replace('A', 'T');
     } else if (dna[i] == 'T') {
       result += dna[i].replace('T', 'A');
     } else if (dna[i] == 'C') {
       result += dna[i].replace('C', 'G');
     } else if (dna[i] == 'G') {
       result += dna[i].replace('G', 'C');
     }
   }
 }

/* another clever solution */
 function DNAStrand(dna) {
   return dna.replace(/./g, function(c) {
     return DNAStrand.pairs[c];
   });
 }

 DNAStrand.pairs = {
   A: 'T',
   T: 'A',
   C: 'G',
   G: 'C',
 };
