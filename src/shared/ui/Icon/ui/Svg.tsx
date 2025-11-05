import styles from "./Svg.module.css";

interface SvgProps {
    onClick?: () => void
}

export const Svg = ({onClick}: SvgProps) => {
    return (
        <div className={styles.svg} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 20">
                <path fill="none" stroke="#FFF" stroke-width="2" d="M1 1l8.836 8.836L1 18.671"/>
            </svg>
        </div>
    )
}