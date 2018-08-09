import { styled } from '../../services'
import buttonTemplate from './button.template';

const styledTemplate = styled(buttonTemplate)`
    :host {
        display: inline-block;
    }

    button {
        padding: 10px 12px;
        border-radius: 3px;
        border-style: none;
        background-color: #882244;
        color: #fff;
        cursor: pointer;
        box-shadow: 0 1px 5px rgba(0, 0, 0, .5);
    }
`;

export default styledTemplate;