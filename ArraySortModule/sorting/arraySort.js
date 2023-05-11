const randomNumber = (maxNumber) => {
    return Math.floor(Math.random() * maxNumber) + 1;
}


const arrayASC = (array) => {
    return array.sort((a,b) => {
        return a - b;
    });
}

const arrayDESC = (array) => {
    return array.sort((a,b) => {
        return b-a;
    });
}


export {randomNumber, arrayASC, arrayDESC};