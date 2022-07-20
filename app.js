//Enter your code here..
async function test(){
    try{
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
        let res2 = await res.json()
        for(i in res2){
            var newDiv = document.createElement('div')
            newDiv.className = 'player'
            newDiv.innerHTML = "Name:" +res2[i].name + "<br>" +"Email:" + res2[i].email+"<br>"+"Phone:"+res2[i].phone+"<br>"+"Website:"+res2[i].website+"<br>"+"Company:"+res2[i].company.name+"<br>"+"City:"+res2[i].address.city+ "<br>"+"Zipcode:"+res2[i].address.zipcode ;
            document.getElementById('message').appendChild(newDiv)

        }
        console.log(res2);
    }
    catch(err){
        console.log('Promise rejected.');
        console.log(error.message);
    }
}

