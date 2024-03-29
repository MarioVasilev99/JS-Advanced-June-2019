class Stringer {
    constructor(string, initLenght){
        this.innerString = string;
        this.innerLength = initLenght;
    }

    increase(length){
        this.innerLength += length;
    }

    decrease(length){
        if (this.innerLength - length < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength -= length;
        }
    }

    toString(){
        if (this.innerLength === 0) {
            return "...";
        }

        if (this.innerString.length > this.innerLength) {
            const stringToReturn = this.innerString.substr(0, this.innerLength);
            return stringToReturn + "...";
        }

        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
