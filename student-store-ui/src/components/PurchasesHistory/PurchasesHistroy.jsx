import React from "react";
import { useState, useEffect } from "react";
import "./PurchaseHistory.css";
import axios from "axios";
import { Link } from "react-router-dom";

const PurchasesHistory = (props) => {

    // const [purchases, setPurchases] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {

        const fetchPurchases = async () => {

            setIsFetching(true);

            try {
                const response = await axios.get("http://localhost:3001/store/purchases/");
                if (response?.data?.allPurchases) {
                    props.setPurchases(response?.data?.allPurchases);
                    console.log("im here")
                }
            } catch (error) {
                const errorMessage = error?.response?.data?.message || error.message;
                alert(errorMessage);
            } finally {
                setIsFetching(false);
                console.log("here")
            }
        }
        fetchPurchases(); 
    }, [])

    return (
        <div className="purchase-history-container">
          {isFetching ? (
            <h2>Loading...</h2>
          ) : (
            <div className="purchase-history">
              {props.purchases.map((purchase) => (
                <div className="purchase-card" key={purchase.newPurchaseID}>
                  <h3>{purchase.confirmationMessage.title}</h3>
                  {/* <p>{purchase.confirmationMessage.message}</p> */}
                  <p>User: {purchase.user.name}</p>
                  {/* <p>Email: {purchase.user.email}</p>
                  <p>Timestamp: {purchase.newPurchaseTimeStamp}</p> */}
                  <p>Grand Total: ${purchase.grandTotal.toFixed(2)}</p>
                  <Link to={`/site-week2-project2-student-store-starter/purchases/${purchase.newPurchaseID}`}>View Details</Link>
                </div>
              ))}
            </div>
          )}
        </div>
      );
};

export default PurchasesHistory;