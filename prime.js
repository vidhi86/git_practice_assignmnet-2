function prime(num){
    let count=0;
    for (i=0 ; i<num ;i++){
        if (num%2==0){
            count++;
        }
    }if(count==2){
        return false;
    }
    return true;
}

console.log(prime(67));