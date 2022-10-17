import { css } from "styled-components";

export const mobileStyle = (props) => {

    return css`
        @media only screen and (max-width:790px) {
            ${props}
        }
    `;

}