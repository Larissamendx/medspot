import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/components/DadosPessoais.module.css";

function DadosPessoaisMedico({ aoEnviar }) {
  const [AtendimentoOnline, setAtendimentoOnline] = useState(1);
  const [AtendimentoPresencial, setAtendimentoPresencial] = useState(1);
  const [isAtendimentoOnline, setIsAtendimentoOnline] = useState(true);
  const [isAtendimentoPresencial, setIsAtendimentoPresencial] = useState(true);

  const toggleButtonOnline = (e) => {
    if (e.target.value == 1) {
      setIsAtendimentoOnline(true);
      setAtendimentoOnline(1);
    } else {
      setIsAtendimentoOnline(false);
      setAtendimentoOnline(0);
    }
  };
  const toggleButtonPresencial = (e) => {
    if (e.target.value == 1) {
      setIsAtendimentoPresencial(true);
      setAtendimentoPresencial(1);
    } else {
      setIsAtendimentoPresencial(false);
      setAtendimentoPresencial(0);
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ AtendimentoOnline, AtendimentoPresencial });
      }}
      className={styles.containerDadosPessoais}
    >
      <label className={styles.btn}>
        Atendimento Online:
        <br />
        <div onClick={toggleButtonOnline}>
          {isAtendimentoOnline ? (
            <>
              <button type="button" value="1" className={styles.btnLeftActive}>
                Sim
              </button>
              <button type="button" value="0" className={styles.btnRight}>
                Não
              </button>
            </>
          ) : (
            <>
              <button type="button" value="1" className={styles.btnLeft}>
                Sim
              </button>
              <button type="button" value="0" className={styles.btnRightActive}>
                Não
              </button>
            </>
          )}
        </div>
      </label>
      <label className={styles.btn}>
        Atendimento presencial:
        <br />
        <div onClick={toggleButtonPresencial}>
          {isAtendimentoPresencial ? (
            <>
              <button type="button" value="1" className={styles.btnLeftActive}>
                Sim
              </button>
              <button type="button" value="0" className={styles.btnRight}>
                Não
              </button>
            </>
          ) : (
            <>
              <button type="button" value="1" className={styles.btnLeft}>
                Sim
              </button>
              <button type="button" value="0" className={styles.btnRightActive}>
                Não
              </button>
            </>
          )}
        </div>
      </label>
      <div className={styles.meioPagamento}>
        Meios de Pagamento:
        <br />
        <div className={styles.pagamento}>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              name="pagamento1"
              id="pagamento1"
              value="Cartão de Crédito"
            />
            <label htmlFor="pagamento1">Cartão de Crédito</label>
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              name="pagamento2"
              id="pagamento2"
              value="À Vista"
            />
            <label htmlFor="pagamento2">À Vista</label>
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              name="pagamento3"
              id="pagamento3"
              value="Plano de Saúde"
            />
            <label htmlFor="pagamento3">Plano de Saúde</label>
          </div>
        </div>
      </div>
      <label className={styles.containerComprovante}>
        Submissão de comprovante de competência
        <br />
        <label htmlFor="comprovante" className={styles.comprovante}>
          Adicione um arquivo
        </label>
        <input type="file" id="comprovante" name="comprovante" />
      </label>
      <label>
        Especialidade:
        <br />
        <input disabled />
      </label>
      <label>
        Nº de registro:
        <br />
        <input type="number" placeholder="Digite o número de registro" />
      </label>
      <button type="submit">Finalizar</button>
    </form>
  );
}

export default DadosPessoaisMedico;
