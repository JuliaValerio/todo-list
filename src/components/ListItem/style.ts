import styled from 'styled-components';

type MainProps = {
    done: boolean;
}

export const Main = styled.div(({done}: MainProps)=>(`
    display: flex;
    background-color: #20212C;
    padding: .5em;
    border-radius: .5em;
    margin: .5em 0;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;


    input[type="checkbox"] {
        -webkit-appearance: none;
        appearance: none;
        background-color: var(--form-background);
        margin-right: 1em;
        font: inherit;
        color: #65b865eb;
        width: 2em;
        height: 2em;
        border: 0.15em solid ${done ? '#65b865eb' : '#CCC'};
        border-radius: 0.15em;
        transform: translateY(-0.075em);
        display: grid;
        place-content: center;
      }
      
      input[type="checkbox"]::before {
        content: "";
        width: 1em;
        height: 1em;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transform: scale(0);
        transform-origin: bottom left;
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
        background-color: #65b865eb;
      }
      
      input[type="checkbox"]:checked::before {
        transform: scale(1);
      }
      
      input[type="checkbox"]:focus {
        outline: max(2px, 0.15em) solid ${done ? '#65b865eb' : '#CCC'};
        outline-offset: max(2px, 0.15em);
      }
      
      input[type="checkbox"]:disabled {
        --form-control-color: var(--form-control-disabled);
        color: var(--form-control-disabled);
        cursor: not-allowed;
      }

    label {
        color: ${done ? '#65b865eb' : '#CCC'};
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
`));