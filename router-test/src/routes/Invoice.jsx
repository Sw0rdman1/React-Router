import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";



export default function Invoice() {
    //userParams sluzi za dobijanje parametara npr :invoiceID i pristupimo preko params,invoiceID
    let params = useParams();
    let navigate = useNavigate();
    let location = useLocation();

    let invoice = getInvoice(parseInt(params.invoiceID, 10));

    return (
        <main 
            className="invoice-card"
            style = {{
            padding: "1rem"
        }}>
            <h2> 
                {invoice.name} : {invoice.number}
            </h2>
            <p>Totale due: {invoice.amount}</p>
            <p>Due Date: {invoice.due}</p>
            <p>
                <button
                onClick={()=> {
                    deleteInvoice(invoice.number);
                    navigate("/invoices" + location.search);
                }}>
                    Delete
                </button>
            </p>
        </main>
    );
}