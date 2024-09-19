document.addEventListener("DOMContentLoaded", function(){
    
    var questionsAnswer = document.getElementById('questionsAnswer');
    
    var questionsAnswerArray = questionsAnswer.children[0].children[1].children;
    var questions = [], answer = [];
    
    for(let i = 0; i < questionsAnswerArray.length; i++){
        
        questions[i] = questionsAnswerArray[i].children[0];
        answer[i] = questionsAnswerArray[i].children[1];
       
    }       
    
     for(let i=0; i < questions.length; i++){
        if(typeof questions[i] == 'object'){questions[i].addEventListener('click', function (event){

            if (answer[i].style.display == 'none'){
                answer[i].style.display = 'block';
                questions[i].children[1].style.transform = "rotate(180deg)";
            } else{
                answer[i].style.display = 'none';
                questions[i].children[1].style.transform = "rotate(0deg)";
            }
               
                                                                          })};
    }
   
    
    
});