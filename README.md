<h1 align="center">LongNumbersDatabase.js</h1>
Library that contains database of long numbers

## Supported numbers

| Name | Suffix | Number |
| --- | --- | --- |
| Thousand | K | 1,000 |
| Million | M | 1,000,000 |
| Billion | B | 1,000,000,000 |
| Trillion | T | 1,000,000,000,000 |
| Quadrillion | q | 1,000,000,000,000,000 |
| Quintillion | Q | 1,000,000,000,000,000,000 |
| Sextillion | s | 1,000,000,000,000,000,000,000 |
| Septillion | S | 1,000,000,000,000,000,000,000,000 |
| Octillion | O | 1,000,000,000,000,000,000,000,000,000 |
| Nonillion | N | 1,000,000,000,000,000,000,000,000,000,000 |
| Decillion	| D | 1,000,000,000,000,000,000,000,000,000,000,000 |

## How to use
| Function | Description | Returns |
| --- | --- | --- |
| getListOfLargeNumber() | Returns 2D array of Large Numbers ([Name, Suffix]); | 2D Array |
| getListOfSuffixes() | Returns array of suffixes ("K", "M" etc.) | Array |
| getDigitsOfLargeNumber(suffix) | Searches for value and returns value ("K" = 1000) | Int value |
| getLargeNumbersInfo(typeID, searchValue) | Searches for value you are provided and returns suitable value info. TypeID is used to tell how you're gonna search. TypeID can be 0 (Search by Name), 1 (Search by Suffix), 2 (Search by numberOfDigits) | Array

## How to install
1. Download file *(/src/LongNumbersDatabase.js)*
2. Move file to the project
3. Import it:
   ```javascript
   import * as longNumbersDatabase from "./LongNumbersDatabase.js"
   ```
