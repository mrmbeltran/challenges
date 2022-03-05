
function solution(inputString) {
    inputString = inputString.toLowerCase();
    let _length = inputString.length;

    if ( 1 <= _length && _length <= Math.pow(10, 5)) {    
        for (let i = 0; i < _length; i++) {
            if (inputString[i] != inputString[_length - ( ! i ? 1 : i +1)]) {
                return false;
            }
        }

        return true;
    }
}
