/**
 * Takes an string and then check if it isn't empty, after that verify if is palindrome.
 *
 * @param {string} inputString
 * @return {boolean}
 */
const solution = (inputString) => {
    const inputString = inputString.toLowerCase();

    if (1 <= inputString.length && inputString.length <= Math.pow(10, 5)) {    
        for (let i = 0; i < _length; i++) {
            if (inputString[i] != inputString[_length - ( ! i ? 1 : i +1)]) {
                return false;
            }
        }
    }

    return true;
}
