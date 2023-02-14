const dollerConverIndianRs= ( doller ) =>{
    if ( typeof doller === 'number' ){
            return doller * 85;
    }else{
        throw Error ('Amount to be need a number');
    }
}
try {
    console.log(dollerConverIndianRs('five'));
} catch (error) {

    console.log(error);
    
}
