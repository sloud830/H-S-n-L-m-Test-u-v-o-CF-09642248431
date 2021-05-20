function merge2String(s1, s2){
    let iter_len=s1.length;
    let longer_string=s2;
    let len_s2=s2.length;

    if (iter_len>len_s2) {
        iter_len=len_s2;
        longer_string=s1;
    }
    let result="";   
    for(let i=0;i<iter_len;++i){
        result+=s1[i]+s2[i];
    }
    result+=longer_string.slice(iter_len);    
    return result;
} 