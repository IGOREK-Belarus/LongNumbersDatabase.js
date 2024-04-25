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
    digitsArray = ["1000", "1000000", "1000000000", "1000000000000", "1000000000000000", "1000000000000000000", "1000000000000000000000", "1000000000000000000000000", "1000000000000000000000000000", "1000000000000000000000000000000", "1000000000000000000000000000000000"];
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

export function getLargeNumbersInfo(typeID, searchValue){
    array = [["Thousand", "K", "1000", "3"], ["Million", "M", "1000000", "6"], ["Billion", "B", "1000000000", "9"], ["Trillion", "T", "1000000000000", "12"], ["Quadrillion", "q", "1000000000000000", "15"], ["Quintillion", "Q", "1000000000000000000", "18"], ["Sextillion", "s", "1000000000000000000000", "21"], ["Septillion", "S", "1000000000000000000000000", "24"], ["Octillion", "O", "1000000000000000000000000000", "27"], ["Nonillion", "N", "1000000000000000000000000000000", "30"], ["Decillion", "D", "1000000000000000000000000000000000", "33"]];
    switch(typeID){
        case 0:
            switch(searchValue){
                case "Thousand":
                    return array[0];
                    break;
                case "Million":
                    return array[1];
                    break;
                case "Billion":
                    return array[2];
                    break;
                case "Trillion":
                    return array[3];
                    break;
                case "Quadrillion":
                    return array[4];
                    break;
                case "Quintillion":
                    return array[5];
                    break;
                case "Sextillion":
                    return array[6];
                    break;
                case "Septillion":
                    return array[7];
                    break;
                case "Octillion":
                    return array[8];
                    break;
                case "Nonillion":
                    return array[9];
                    break;
                case "Decillion":
                    return array[10];
                    break;
                default:
                    console.error("Wrong name was provided. Name: " + searchValue);
                    break;
            }
            break;
        case 1:
            switch(searchValue){
                case "K":
                    return array[0];
                    break;
                case "M":
                    return array[1];
                    break;
                case "B":
                    return array[2];
                    break;
                case "T":
                    return array[3];
                    break;
                case "q":
                    return array[4];
                    break;
                case "Q":
                    return array[5];
                    break;
                case "s":
                    return array[6];
                    break;
                case "S":
                    return array[7];
                    break;
                case "O":
                    return array[8];
                    break;
                case "N":
                    return array[9];
                    break;
                case "D":
                    return array[10];
                    break;
                default:
                    console.error("Wrong suffix was provided. Suffix: " + searchValue);
                    break;
            }
        case 2:
            switch(searchValue){
                case "3":
                    return array[0];
                    break;
                case "6":
                    return array[1];
                    break;
                case "9":
                    return array[2];
                    break;
                case "12":
                    return array[3];
                    break;
                case "15":
                    return array[4];
                    break;
                case "18":
                    return array[5];
                    break;
                case "21":
                    return array[6];
                    break;
                case "24":
                    return array[7];
                    break;
                case "27":
                    return array[8];
                    break;
                case "30":
                    return array[9];
                    break;
                case "33":
                    return array[10];
                    break;
                default:
                    console.error("Wrong number of digits was provided. Number: " + searchValue);
                    break;
            }
        default:
            console.error("Wrong type ID was passed! ID: " + typeID)
    }
}