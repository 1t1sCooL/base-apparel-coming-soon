import styles from './MainPage.module.css'
import {Footer} from "@/shared/ui/Footer/Footer.tsx";
import {Form} from "@/widgets/Form/Form.tsx";

export const MainPage = () => {
    return (<>
            <div className={styles.container}>
                <Form/>
                <div className={styles.img}></div>
            </div>
            <Footer/>
        </>
    )
}