import * as React from "react";
import BarraPesquisa from "../../components/BarraPesquisa";
import Navbar from "../../components/Navbar";
import NotificationItem from "../../components/NotificationItem";
import styles from "./style.module.css";

function Notification() {
  return (
    <div className={styles.containerNotification}>
      <div className={styles.nav}>
        <Navbar />
        <BarraPesquisa />
      </div>
      <div className={styles.consultaItem}>
        <NotificationItem doctor="Ferdinando" />
        <NotificationItem doctor="José" />
        <NotificationItem doctor="Ferdinando" />
      </div>
    </div>
  );
}

export default Notification;
