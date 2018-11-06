function call5With3(func){
return func(5,3)
}

call5With3(console.log) //5 , 3  in browser console


call5With3((a,b)=>a+b) //return 8