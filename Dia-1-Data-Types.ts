'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
        // Declare second integer, double, and String variables.
    const i = 4
    const d = 4.0
    const s = "HackerRank "
    var i2;
    var d2;
    var s2;
    // Read and save an integer, double, and String to your variables.
    i2 = parseInt(readLine());
    d2 = parseFloat(readLine());
    s2 = readLine();
    // Print the sum of both integer variables on a new line.
    console.log(i + i2);
    // Print the sum of the double variables on a new line.
    console.log((d + d2).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + s2);
}