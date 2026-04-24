const veh=['Bus','Truck','Car','Bike'];
let printVeh=veh.map(function(val,index){
    return {"Key ":index,"Value": val};
})
console.log(printVeh);