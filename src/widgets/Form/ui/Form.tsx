import styles from "./Form.module.css";
import {Logo} from "@/shared/ui/Logo/";
import {Description} from "@/widgets/Description/";

export const Form = () => {
    return (
        <section className={styles.form}>
            <Logo/>
            <div className={styles.mobileImg}></div>
            <Description/>
        </section>
    )
}