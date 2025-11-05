import styles from './MainPage.module.css'
import {Footer} from "@/shared/ui/Footer/";
import {Form} from "@/widgets/Form/";

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