import styles from "./Description.module.css";
import {InputWrapper} from "@/widgets/InputWrapper/ui/InputWrapper.tsx";
import {Text} from "@/shared/ui/Text/Text.tsx";
import {Heading} from "@/shared/ui/Heading/Heading.tsx";

export const Description = () => {
    return (
        <div className={styles.description}>
            <Heading/>
            <Text/>
            <InputWrapper/>
        </div>
    )
}