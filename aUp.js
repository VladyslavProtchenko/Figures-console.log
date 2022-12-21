const l = 7;
const x = Math.ceil(l/2)


function aDown(x) {
    let starsCount = 1;

    for(let i =0;i<x;i++) {
        
        let star = '*'.repeat(starsCount);
        let space = ' '.repeat(x-i);
        starsCount = starsCount+2;

        console.log(space,star,space);
        
    }
}

aDown(x);