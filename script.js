 // para1.addEventListener("mouseover",highlight)
 function highlight(){
	 // para.forEach((word)=>word.style.color="blue")
    // para.style.color="blue"
	   var boldWords = document.querySelectorAll('strong');
  for (var i = 0; i < boldWords.length; i++) {
    boldWords[i].style.color = 'green';
  }

 }
 function return_normal(){
     var boldWords = document.querySelectorAll('strong');
  for (var i = 0; i < boldWords.length; i++) {
    boldWords[i].style.color = 'black';
  }

 }