
//fetching service file
export async function getStock(){
    return fetch(`${process.env.REACT_APP_API_BASE_URL}`)
    .then (response => response.json())
}

//add stock item
export async function addStockItem(newStockItem){
    const stockData = JSON.stringify(newStockItem)
    return fetch(`${process.env.REACT_APP_API_BASE_URL}`,
    {
        method: 'POST',
        headers: {'COntent-Type': 'application/json'},
        body: stockData
    })
    .then (response => response.json())
}

//delete stock item
export async function deleteStockItem(sku){
    const deleteStockData = JSON.stringify({"sku" : sku});
    return fetch(`${process.env.REACT_APP_API_BASE_URL}`,
    {
        method : 'DELETE',
        headers: { 'Content-Type': 'application/json'},
        body: deleteStockData
    })
    .then (response => response.json())


}