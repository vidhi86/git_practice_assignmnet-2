function Prime(num){
    let count=0;
    for (i=0 ; i<num ;i++){
        if (num%i==0){
            count++;
        }
    }if(count==2){
        return true;
    }
    return false;
}

let ans=Prime(63)
console.log(ans)