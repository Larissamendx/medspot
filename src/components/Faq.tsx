import react from "react";
import styles from "../styles/components/Faq.module.css";

interface FaqProps {
    title: string;
    subtitle:string;
}

const Faq: React.FC<FaqProps> = (props) => {
    return (
             
        <div className={styles.Faq}>

           <h3>{props.title}</h3>
           <p>{props.subtitle}</p>
               
        </div>
           
  );
}

export default Faq;
