const x = 7;
const m = Math.ceil(x/2);


function aLeft(x) {

    let star;
    let space;
    let count = 0;

    for(let i =0;i<x;i++) {
        if(i<m) {
            star = '*'.repeat(i+1);
            space = ' '.repeat(m-i-1);
        } else {
            count++;
            star = '*'.repeat(m-count);
            space = ' '.repeat(count);
        }
        
        console.log(star+space); 
    }
}

aLeft(x);