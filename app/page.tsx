'use client';

import Image from "next/image";
import styles from "./page.module.css";
import WindowTracker from "./components/WindowTracker";
import React,{useState} from "react";

export default function Home() {

  const [showSize, setShowSize] = useState(true)
  function handleShow() {
    setShowSize(prevState => !prevState)
  }

  return (
   <main className={styles.main}>
    <button onClick={handleShow} className={styles.butt}>Toggle window tracker</button>
    {showSize && <WindowTracker/>}
   </main>
  );
}
