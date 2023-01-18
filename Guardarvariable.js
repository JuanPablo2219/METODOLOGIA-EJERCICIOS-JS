let nums=[2,2,3,5];
let i=0;
let cont=0;
let itemsearch=prompt("ingresar numeros a buscar")
while(i<nums.length){
    if(nums[i]==itemsearch){
        cont=cont+1
    }
    

        i=i+1;
    
}
console.log("hay" +cont+ "numeros"+itemsearch)