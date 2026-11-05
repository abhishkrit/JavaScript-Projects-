  let calc = localStorage.getItem('calculation') || '';
              
      function calculation(x){
        calc +=  x ;
        document.querySelector('.js-result-calc').innerHTML=`Result : ${calc}`;
      }

      function total_evaluate(){
        // Note:   eval() takes a string and runs it as code.
        // Avoid using eval() in real world projects since
        // it can potentially be given harmful code to run.
        // Only use eval() for learning purposes.
        calc = eval(calc);
        localStorage.setItem('calculation',calc)
        document.querySelector('.js-result-calc').innerHTML=`Result : ${calc}`;
        
      }