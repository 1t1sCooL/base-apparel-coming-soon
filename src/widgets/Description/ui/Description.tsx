import styles from "./Description.module.css";
import {InputWrapper} from "@/widgets/InputWrapper/";
import {Text} from "@/shared/ui/Text/";
import {Heading} from "@/shared/ui/Heading/";

export const Description = () => {
    return (
        <div className={styles.description}>
            <Heading/>
            <Text/>
            <InputWrapper/>
        </div>
    )
}