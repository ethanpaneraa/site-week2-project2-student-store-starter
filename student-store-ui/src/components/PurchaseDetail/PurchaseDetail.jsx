import React from "react";
import "./PurchaseDetail.css";
import { useParams } from "react-router-dom";

const PurchaseDetail = (props) => {

    const { id } = useParams();
    console.log(props.purchases);
    // console.log(id);
    const purchase = props.purchases.find((purchase) => 
    Number(purchase.newPurchaseID) == id);

  if (!purchase) {
    // Handle case when purchase is not found
    return <div>No purchase found.</div>;
  }

  return (
    <div className="purchase-details">
      <h1>Purchase Details</h1>
      <div>
        <h2>Order ID: {purchase.newPurchaseID}</h2>
        <p>User Name: {purchase.user.name}</p>
        <p>User Email: {purchase.user.email}</p>
        <p>Total: ${purchase.grandTotal.toFixed(2)}</p>
        <p>Timestamp: {purchase.newPurchaseTimeStamp}</p> 
        <p>{purchase.confirmationMessage.message}</p>
      </div>
    </div>
  );
};

export default PurchaseDetail