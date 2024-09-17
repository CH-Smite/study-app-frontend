import {ClassNameProps} from "../types/ClassNameProps";

export const Pokeball = ({className: CN = ''}: ClassNameProps) => (
    <svg
        viewBox="0 0 208 208"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={CN}
    >
        <g opacity="0.1">
            <path
                d="M128.762 104C128.762 117.676 117.676 128.762 104 128.762C90.3244 128.762 79.2381 117.676 79.2381 104C79.2381 90.3243 90.3244 79.2381 104 79.2381C117.676 79.2381 128.762 90.3243 128.762 104Z"
                fill="currentColor"
            />
            <path
                d="M104 208C156.393 208 199.738 169.257 206.947 118.857H146.035C139.917 136.169 123.407 148.571 104 148.571C84.5933 148.571 68.0835 136.169 61.9648 118.857H1.05321C8.26233 169.257 51.6067 208 104 208ZM61.9648 89.1428H1.05321C8.26233 38.743 51.6067 -3.05176e-05 104 -3.05176e-05C156.393 -3.05176e-05 199.738 38.743 206.947 89.1428H146.035C139.917 71.8314 123.407 59.4285 104 59.4285C84.5933 59.4285 68.0835 71.8314 61.9648 89.1428ZM128.762 104C128.762 117.676 117.676 128.762 104 128.762C90.3244 128.762 79.2381 117.676 79.2381 104C79.2381 90.3243 90.3244 79.2381 104 79.2381C117.676 79.2381 128.762 90.3243 128.762 104Z"
                fill="#ffffff"
            />
        </g>
    </svg>
)
