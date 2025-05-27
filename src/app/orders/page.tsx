"use client";
import styles from "@/app/styles/orders.module.css";
import React, { useState } from "react";
import clsx from "clsx";

import { Client, Order } from "../partials/auxiliar";
import { testClients } from "../partials/auxiliar";
import { testMenuProducts } from "../partials/auxiliar";
import { testOrders } from "../partials/auxiliar";

import SearchIcon from '@mui/icons-material/Search';


function Title({ title = "", button, handleButton}: any) {


  return (
    <div className={styles.tilteContainer}>
      <h2>{title}</h2>
      {button != undefined ? <div className={styles.titleButton} onClick={handleButton}>{button}</div> : undefined}
    </div>

  );
}

function Section({ title = "" }) {


  return (
    <div className={styles.section}>
      <h3>{title}</h3>
    </div>
  )
}


function ProductSearchable({ pname, price }: any) {
  return (

    <div className={styles.productSearchContainer}>
      <p>{pname}</p>
      <p>{price}</p>

    </div>

  );
}

function NewOrder({visible, setVisible}: any) {

  const [tablesNumber, setTablesNumber] = useState(5);
  const [clients, setClients] = useState<Array<Client>>([]);

  // Filtered clients
  const [displayedClients, setDisplayedClients] = useState<Array<Client>>(testClients);

  function handleClientSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const q = e.target.value.toLowerCase();

    if (q === "") {
      setDisplayedClients(testClients); // Show all if q is empty
    } else {
      const filteredClients = testClients.filter(client =>
        client.Name.toLowerCase().includes(q)
      );
      setDisplayedClients(filteredClients);
    }
  }



  return (
    <div className={clsx({
      [styles.newOrderPopUp]: visible,
      [styles.hide]: !visible
    })} >
  <div className={styles.newOrderFeatureContainer} >
      <div className={styles.newOrderForm}>
        <div className={styles.orderPrimaryInfoSection}>
          <p>Tipo</p>
          <div className={styles.orderTypeSelectionGroup}>
            <div className={styles.orderTypeSelection_container}>
              <input type="radio" id="RBDelivery" name="order_type" />
              <label htmlFor="RBDelivery">Entrega</label>
            </div>
            <div className={styles.orderTypeSelection_container}>
              <input type="radio" id="RBTakeOut" name="order_type" />
              <label htmlFor="RBTakeOut">Para llevar</label>
            </div>
            <div className={styles.orderTypeSelection_container}> 
              <input type="radio" id="RBStay" name="order_type" />
            <label htmlFor="RBStay">Dentro</label>
            </div>
          </div>
          <div className={styles.tableSelectionGroup}>
            <label htmlFor="orderTableNumber">Mesa</label>
            <select name="orderTableNumber" id="orderTableNumber">
              {[...Array(tablesNumber)].map((_, i) => {
                return <option key={i + "-order"} value={i + 1}>{i + 1}</option>;
              })}
            </select>
          </div>
          <div className={styles.clientNameInputGroup}>
            <input id="clientName" type="text" list="clientsDL" placeholder="Nombre del cliente" onChange={handleClientSearchChange} />
            <datalist id="clientsDL">
              {displayedClients.map((client, i) => (
                <option value={client.Name} key={i + "-client"} />
              ))}
            </datalist>
          </div>
        </div>
        <div className={styles.productSelectionSection}>
          <div className={styles.productSearchBar}>
            <SearchIcon />
            <input type="text" placeholder="Buscar productos" />
          </div>
          <div className={styles.productListContainer}>
            {testMenuProducts.map((product, i) => (
              <ProductSearchable key={product.id} pname={product.name} price={product.price} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.formActionsContainer}>
        <div className={styles.actionButton} onClick={()=> setVisible(!visible)}>Cancel</div>
        <div className={styles.actionButton}>Create order</div>
      </div>
    </div>
    </div>
  
  );

}

function RowEntry({ value }: any) {

  const keys = Object.keys(value);

  return (

    <li className={styles.row}>

      {keys.map((key) => {

        const cellValue = value[key];
        let displayValue: React.ReactNode;

        if (cellValue === null || cellValue === undefined) {
          displayValue = "N/A";
        } else if (typeof cellValue === 'object') {
          try {
            displayValue = cellValue.Name;
          } catch (error) {
            try {
              displayValue = JSON.stringify(cellValue);
            } catch (error) {
              displayValue = '[Unserializable Object]';
            }
          }
        }
        else {
          // For strings, numbers
          displayValue = cellValue;
        }


        return <p key={key}>{displayValue}</p>;

      })}

    </li>

  );

}

function Table() {

  const tableKeys = Object.keys(testOrders[0] || {}) as (keyof Order)[];

  if (!testOrders || testOrders.length === 0) {
    return <div className={styles.ActiveOrdersContainer}><p>No orders to display.</p></div>;
  }

  return (

    <div className={styles.ActiveOrdersContainer}>

      {/* Print headers */}
      <ul className={styles.tableHeadersContainer}>
        {tableKeys.map((headerValue) => (

          <li key={`${headerValue}-header`} className={styles.tableHeader}>{headerValue}</li>

        ))}
      </ul>

      {/* Print row entries */}
      <ul className={styles.rowsContainer}>
        {testOrders.map((element, i) => (
          <RowEntry key={`${i}-row`} value={element} />
        ))}
      </ul>

    </div>

  );
}


export default function Home() {

  const [newOrderPopUpVisible, setNewOrderPopUpVisible] = useState(false);

  function newOrderHandle(){
    setNewOrderPopUpVisible(!newOrderPopUpVisible);
  }

  return (
    <main className={styles.main}>
      <Title title="Nueva orden" button="Nueva orden" handleButton={newOrderHandle}/>
      <NewOrder visible={newOrderPopUpVisible} setVisible={setNewOrderPopUpVisible}/>
      <Section title="Ordenes" />
      <Table />
    </main>
  );
}
