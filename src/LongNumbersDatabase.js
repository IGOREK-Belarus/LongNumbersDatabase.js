export function getListOfLargeNumbers(){
    array = [["Thousand", "K"], ["Million", "M"], ["Billion", "B"], ["Trillion", "T"], ["Quadrillion", "q"], ["Quintillion", "Q"], ["Sextillion", "s"], ["Septillion", "S"], ["Octillion", "O"], ["Nonillion", "N"], ["Decillion", "D"]];
    return array;
}

export function getListOfSuffixes(){
    array = ["K", "M", "B", "T", "q", "Q", "s", "S", "O", "N", "D"];
    return array;
}

export function getDigitsOfLargeNumber(suffix){
    suffixArray = ["K", "M", "B", "T", "q", "Q", "s", "S", "O", "N", "D"];
    digitsArray = ["1000", "1,000,000", "1,000,000,000", "1,000,000,000,000", "1,000,000,000,000,000", "1,000,000,000,000,000,000", "1,000,000,000,000,000,000,000", "1,000,000,000,000,000,000,000,000", "1,000,000,000,000,000,000,000,000,000", "1,000,000,000,000,000,000,000,000,000,000", "1,000,000,000,000,000,000,000,000,000,000,000"];
    switch(suffix){
        case "K":
            return digitsArray[0];
            break;
        case "M":
            return digitsArray[1];
            break;
        case "B":
            return digitsArray[2];
            break;
        case "T":
            return digitsArray[3];
            break;
        case "q":
            return digitsArray[4];
            break;
        case "Q":
            return digitsArray[5];
            break;
        case "s":
            return digitsArray[6];
            break;
        case "S":
            return digitsArray[7];
            break;
        case "O":
            return digitsArray[8];
            break;
        case "N":
            return digitsArray[9];
            break;
        case "D":
            return digitsArray[10];
            break;
        default:
            console.error("Wrong suffix was passed! Suffix: " + suffix);
            break;
    }
}