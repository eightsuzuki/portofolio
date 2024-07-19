import styles from "./page.module.css";
import WaveAnimation from "../components/WaveAnimation";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <WaveAnimation />
      </div>
    </main>
  );
}
