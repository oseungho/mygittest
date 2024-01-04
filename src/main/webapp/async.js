function async(){
    console.log("첫번째 작업");
    setTimeout(()=>{
        console.log("두번째 작업");

    },2000);
    
    console.log("세번째 작업");
}