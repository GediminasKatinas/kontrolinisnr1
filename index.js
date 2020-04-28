function p() { 
          
    var n, i, flag = true; 
      
   
    n = document.myform.n.value; 
    var answer = document.getElementById('result');
    
    n = parseInt(n) 
    for(i = 2; i <= n - 1; i++) 
        if (n % i == 0) { 
            flag = false; 
        
            break; 
        } 
     
       
    if (flag == true) {
    answer.value=n + " yra pirminis";
    }
    else
    {
        answer.value=n + " nera pirminis";
    }
    
} 