import * as React from "react";

import styles from "../styles/components/NotificationItem.module.css";

interface NotificationItemProps {
  doctor: string;
}

const NotificationItem: React.FC<NotificationItemProps> = (props) => {
  return (
    <div className={styles.containerNotificationItem}>
      <h3>
        Sua consulta com <span>Dr. {props.doctor}</span> está chegando. Fique
        atento a data e a hora marcada.
      </h3>
    </div>
  );
};

export default NotificationItem;
