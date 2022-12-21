const x = 7;

function aDown(x) {
    

    for(let i =0;i<x/2;i++) {

        let space = ' '.repeat(i);
        let star = '*'.repeat(x-i*2);

        console.log(space,star,space);
    }
}

aDown(x);