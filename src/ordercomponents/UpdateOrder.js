import React from 'react'

const UpdateOrder = () => {

    function handleFinder(e){
        e.preventDefault();
        fetch("https://localhost:7143/api/order/" + document.getElementById("orderId").value)
        .then(response=>{
            if(response.status !== 200){
                alert("Error: status " + response.status);
                return Promise.reject(response.status);
            }
            return response.json();
        })
        .then(json => {
            document.getElementById("orderHeader").innerHTML = "Displaying Order ID#" + json.orderId;
            document.getElementById("orderDate").innerHTML = json.orderDate;
        });
    }
    function handleFiller(e){
        e.preventDefault();

        let order = {
            orderDate: document.getElementById("orderDate").value
        }

        const url = "https://localhost:7143/api/order";

        const init = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(order)
        };

        fetch(url, init)
        .then(response => {
            if (response.status !== 200){
                alert("error: " + response.status);
            }
            else{
                alert("Successfully updated order " + document.getElementById("orderId").value)
            }

        })
    }

  return (
    <div>
    <br/>
    <h3>UPDATE</h3>
    <form name = "update-order" onSubmit = {handleFinder}>
        <label>Order ID: </label>
        <input type= "number" id="orderId"></input>
        <input type="submit" value="Find"></input>
    </form>
    <form name = "update-order" onSubmit = {handleFiller}>
    <label>Order Date: </label>
      <input type="text" name="orderDate" id="orderDate"/><br></br>
      <input type="submit" value="Update Order" />
    </form>
    </div>
  )
}

export default UpdateOrder