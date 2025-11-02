import styles from "./InputWrapper.module.css";
import { Svg } from "@/shared/ui/Icon/Svg.tsx";
import { useState } from "react";
import {isValidEmail} from "../utils/isValidEmail.ts";

export const InputWrapper = () => {
    const [value, setValue] = useState<string>('');
    const [touched, setTouched] = useState<boolean>(false);

    const isValid = isValidEmail(value);
    return (
        <>
            <div className={styles.inputWrapper}>
                <div className={`${styles.input} ${value && styles.value}`}>
                    <input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onBlur={() => setTouched(true)}
                        placeholder={'Email Address'}
                    />
                    <Svg onClick={() => {
                        if (isValid) {
                            setValue('');
                            setTouched(false);
                        }
                    }} />
                </div>
                {touched && !isValid && <p>Please provide a valid email</p>}
            </div>
        </>
    );
};