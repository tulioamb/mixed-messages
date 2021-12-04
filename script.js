const createMessage = () => {
    const firstWord = ['I want', 'I do not want', 'Would you like'];
    const secondWord = ['a toy', 'food', 'a trip'];
    const thirdWord = ['birthday', 'anniversary', 'Christmas'];
    
    let index1 = Math.floor(Math.random()*3);
    let index2 = Math.floor(Math.random()*3);
    let index3 = Math.floor(Math.random()*3);

    //return `${firstWord[index1]} ${secondWord[index2]} for ${thirdWord[index3]}`;
    return [index1, index2, index3];
}

console.log(createMessage());