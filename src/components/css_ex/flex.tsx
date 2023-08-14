import styles from "./index.module.scss";

const Flex: React.FC = () => {
  return (
    <html>

      <div className={styles.contentArea}>
        <p>【 nowrap 】<br />折り返さない</p>
        <div id={styles.id1} className={styles.flexbox1}><div className={styles.ca}>A</div><div className={styles.cb}>B</div><div className={styles.cc}>C</div><div className={styles.cd}>D</div><div className={styles.ce}>E</div></div>
      </div>

      <div className={styles.contentArea}>
        <p>【 wrap 】<br />折り返す（左から右）</p>
        <div id={styles.id2} className={styles.flexbox1}><div className={styles.ca}>A</div><div className={styles.cb}>B</div><div className={styles.cc}>C</div><div className={styles.cd}>D</div><div className={styles.ce}>E</div></div>
      </div>

      <div className={styles.contentArea}>
        <p>【 wrap-reverse 】<br />折り返す（右から左）</p>
        <div id={styles.id3} className={styles.flexbox1}><div className={styles.ca}>A</div><div className={styles.cb}>B</div><div className={styles.cc}>C</div><div className={styles.cd}>D</div><div className={styles.ce}>E</div></div>
      </div>

    </html>
  )
}
