import React, {useState, useEffect } from "react"
import { getStock, deleteStockItem, addStockItem } from "../../Services/StockService"
import Add from "../Add/Add"
// import Delete from "../Delete/Delete"
import Checkout from "../Checkout/Checkout"

function StockList(){


    //store the stock
    const [stock, setStock] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newStockItem, setNewStockItem] = useState();
    const [inventory, updatedInventory] = useState();


    //get the stock on component loading
    useEffect(() =>{
        refreshPage()
    }
    ,[])

    //refresh page function
    function refreshPage(){
        setLoading(true);
        getStock()
        .then(json =>{
            setStock(json);
            setLoading(false);
        })
        //error message if there was a problem during refresh
        .catch(err =>{
            console.error(err)
            setError(err)
        });
    }

    //deleteStocK function
    async function deleteStock(e){
        console.log(e.target.value + " deleted");
        await deleteStockItem(e.target.value);
        refreshPage();
    }

    //addStock function
    async function addStock(e){
        console.log("Add being processed")
        await addStockItem(newStockItem)
        refreshPage();
    }

    //update inventory
    function updateInventory(e) {
        let updatedInventory = inventory;
        setInventory({
            ...updatedInventory,
            [e.target.id]: e.target.value
        })
    }

    //error check
    if (loading) return (<div className="alert alert-info">Sorry, something went wrong</div>)


    //loading check
    if (error) return (<div className="alert alert-danger">Sorry, there was an error loading that page</div>)

    //render the table
    return (
        <div className="row border-dark border rounded">
            <h1>Assignment #3 - Stephen Horton (300137662)</h1>
            <div className="container col-sm-8 col-md-8 border border-danger rounded">
            <table className="table">
                <thead>
                        <tr>
                            <th>SKU</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Add</th>
                        </tr>
                    </thead>
                    <tbody>
                    {stock.map((stock, key) => (
                        <tr key={key}>
                            <td>{stock.id}</td>
                            <td>{stock.name}</td>
                            <td>{stock.model}</td>
                            <td><button className="alert-danger alert" onClick={deleteStock} value={stock.id}>Delete</button></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            </div>
            {<Add action={addStock} update={updateInventory}/>}
        </div>
    )
}

export default StockList