import React from 'react'
const AddOrder = () => {

    function handleSubmit(e){
        e.preventDefault();


        let order = {
            OrderDate: document.getElementById("OrderDate").value
        }

        const url = "https://localhost:7143/api/order";

        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(order)
        };
    
        fetch(url, init).
        then(response=>{
            if(response.status !== 201){
                alert("Error: status " + response.status);
                return Promise.reject(response.status);
            }
            return response.json();
        })
        .then(json=>{
            alert("Successfully added new order with ID of " + json.orderId)
        })
    }

  return (
    <>
    <br/>
    <h3>ADD</h3>
    <form name = "add-order" onSubmit = {handleSubmit}>
      <label>Order Date: </label>
      <input type="text" name="OrderDate" id="OrderDate"/><br></br>
      <input type="submit" value="Add Order" />
    </form>
    </>
  )
}

export default AddOrder