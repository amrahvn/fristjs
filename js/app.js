
let now = new Date();
let hour = now.getHours()

if (hour >= 6 && hour < 12) {
    alert('Good morning')
    console.log("Good morning");
    document.body.style.backgroundColor='white'
    
    
} else if (hour >= 12 && hour < 18) {
    alert('Good afternoon')
    console.log("Good day");
    document.body.style.backgroundColor='red'
  
    
} else {
    alert('Good night')
    console.log("Good night");
    document.body.style.backgroundColor='black'   
   
}
