"use client";
import styles from "@/app/styles/expenses.module.css";
import stylesComponent from "@/app/styles/components.module.css";
import React, { useState } from "react";
import clsx from "clsx";

import { useRef } from "react";
import { useEffect } from "react";

import { Client } from "../partials/auxiliar";
import { testClients } from "../partials/auxiliar";

import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

import { Title, Section } from "../components/components";

function NewExpense({ visible, setVisible }: any) {

  const dateInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLInputElement>(null);

  useEffect(() => {

    if (visible) {
      descriptionInput.current?.focus();
    }

    if (dateInput.current != null) {

      dateInput.current.valueAsDate = new Date();
    }

  },[visible]);



  function handleInputPrice(e: any) {


    let value = e.target.value.replace(/[^0-9.]/g, "");
    let parts = value.split(".");

    // Just keep two parts of string with one dot
    if (parts.length > 2) {
      value = parts[0] + "." + parts.slice(1).join("");
    }



    e.target.value = value;

  }

  return (
    <div className={clsx({
      [styles.PopUp]: visible,
      [stylesComponent.hide]: !visible
    })} >
      <div className={styles.PopUpFeatureontainer}>
        <div className={styles.Form}>
          <Section title={"Agregar nuevo gasto"} />
          <div className={styles.inputContainer}>
            <label htmlFor="InputDescription">Descripcion</label>
            <input type="text" name="" id="InputDescription" tabIndex={0} placeholder="Jabon Roma 1kg..." ref={descriptionInput} />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="InputPrice">Precio</label>
            <div className={styles.inputIcon}>
              <span >$</span>
              <input type="text" name="" id="InputPrice" placeholder="0.00" onInput={(e) => handleInputPrice(e)} />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="inputCategory">Categoria</label>
            <select name="" id="inputCategory">
              <option value="">Suministros</option>
              <option value="">Salario</option>
              <option value="">Renta</option>
              <option value="">Mantenimiento</option>
              <option value="">Otros</option>
            </select>
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="inputDate">Fecha</label>
            <input type="date" name="" id="inputDate" ref={dateInput} />
          </div>
          <div className={styles.inputContainerRow}>
            <label htmlFor="inputStatus">Pagado</label>
            <input type="checkbox" name="" id="inputStatus" defaultChecked/>
          </div>
        </div>
        <div className={styles.formActionsContainer}>
          <div className={styles.actionButton} onClick={() => setVisible(!visible)}>Cancel</div>
          <div className={styles.actionButton}>Guardar</div>
        </div>
      </div>

    </div>

  );

}

export default function () {

  const [newExpensePopUp, setNewExpensePopUp] = useState(false);

  function handleNewExpense() {
    setNewExpensePopUp(!newExpensePopUp);
  }

  return (
    <main className={styles.main}>
      <NewExpense visible={newExpensePopUp} setVisible={setNewExpensePopUp} />
      <Title title="Gastos" button="Agregar gasto" handleButton={handleNewExpense} />
    </main>
  );
}
