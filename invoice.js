document.addEventListener('DOMContentLoaded', function() {


    let quantities =  document.getElementsByClassName("quantity");
    let unitPrices =  document.getElementsByClassName("unitPrice");
    let itemTotals = document.getElementsByClassName("itemTotal");


    for (let i= 0; i < quantities.length ; i++) {
        
        let x = quantities[i] ;

        x.addEventListener('input',function() {
          
            unitPrices[i].value = x.value * 10 ;

            itemTotals[i].innerHTML = quantities[i].value * unitPrices[i].value ;
            
        })
        
    }


    
    
    // these are selection helpers
    const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0];
    const invoiceTotal = document.getElementById('invoiceTotal');



    // This function updates the total amount in each row ( item price * Qte )
    function updateItemTotal(row) {
       
    }


    // This function updates the total amount of the invoice (sum all Item totals)
    function updateInvoiceTotal() {
       
    }


    // Ajouter un nouveau item 
    function addNewItem() {
        

    }


    // If you finish the above functions, consider adding a delete button
 
});
