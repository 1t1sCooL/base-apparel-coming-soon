import styles from "./Form.module.css";
import {Logo} from "@/shared/ui/Logo/Logo.tsx";
import {Description} from "../Description/Description.tsx";

export const Form = () => {
    return (
        <section className={styles.form}>
            <Logo/>
            <div className={styles.mobileImg}></div>
            <Description/>
        </section>
    )
}