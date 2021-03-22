
//fetching service file
export async function getStock(){
    return fetch(`${process.env.REACT_APP_API_BASE_URL}`)
    .then (response => response.json())
}

//add stock item
export async function addStockItem(newStockItem){

}

//delete stock item
export async function deleteStockItem(sku){

    
}