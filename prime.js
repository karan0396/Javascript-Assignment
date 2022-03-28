function prime(n){
   for (let i=2 ; i<n; i++){
        if(n%i ===0)
        return false;
    }return true;
}
function calling(){
let num = parseInt(document.getElementById("a").value);
let num1 = parseInt(document.getElementById("b").value);
if (num>=num1|| num<2 || num>200){
    alert("Check Number be !");
    return;
}
arr=[];
for (i=num;i<=num1;i++){
    if(prime(i) == true){
        arr.push(i);
    }
}
    const list = document.getElementById("list")
    list.innerHTML = "";
    arr.forEach(element => {
        let li1 = document.createElement("li");
        li1.innerHTML = element;
        list.appendChild(li1);
    });
};

