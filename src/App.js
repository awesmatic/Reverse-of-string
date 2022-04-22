import styles from "./App.module.css";
import Input from "./component/Input";

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Reverse a String</h1>
      <Input />
    </div>
  );
}

export default App;
