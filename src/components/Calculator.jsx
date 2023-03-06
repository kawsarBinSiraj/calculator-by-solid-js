import { createSignal, createEffect } from "solid-js";

const Calculator = () => {
    const [firstOperand, setFirstOperand] = createSignal("");
    const [secondOperand, setSecondOperand] = createSignal("");
    const [operator, setOperator] = createSignal("");
    const [output, setOutput] = createSignal("");

    /**
     * description :-
     * created_at  :- 06/03/2023 16:28:53
     */
    const click = (value) => {
        if (!operator()) setFirstOperand((prev) => prev + value);
        else setSecondOperand((prev) => prev + value);
    };

    /**
     * description :- making result
     * created_at  :- 06/03/2023 17:03:12
     */
    const result = () => {
        let r;
        if (operator() == "+") r = parseInt(firstOperand()) + parseInt(secondOperand());
        if (operator() == "-") r = parseInt(firstOperand()) - parseInt(secondOperand());
        if (operator() == "/") r = parseInt(firstOperand()) / parseInt(secondOperand());
        if (operator() == "*") r = parseInt(firstOperand()) * parseInt(secondOperand());
        setOutput(r);
    };

    /**
     * description :- reset
     * created_at  :- 06/03/2023 17:08:30
     */
    const reset = ()=> {
        setFirstOperand('');
        setSecondOperand('');
        setOperator('');
        setOutput('');
    }

    return (
        <div class="calculator">
            <div class="header">
                <div class="window">
                    <span class="red"></span>
                    <span class="yellow"></span>
                    <span class="green"></span>
                </div>
                <div class="input">
                    <span>{firstOperand()}</span>
                    <span>{operator()}</span>
                    <span>{secondOperand()}</span>
                    <span>{output() ? "=" + output() : null}</span>
                </div>
            </div>
            <div class="keys">
                <div class="row">
                    <div class="number">
                        <span onclick={() => click(7)}>7</span>
                        <span onclick={() => click(8)}>8</span>
                        <span onclick={() => click(9)}>9</span>
                    </div>
                    <div class="symbol">
                        <span onclick={() => setOperator("/")}>÷</span>
                    </div>
                </div>
                <div class="row">
                    <div class="number">
                        <span onclick={() => click(4)}>4</span>
                        <span onclick={() => click(5)}>5</span>
                        <span onclick={() => click(6)}>6</span>
                    </div>
                    <div class="symbol">
                        <span onclick={() => setOperator("-")}>-</span>
                    </div>
                </div>
                <div class="row">
                    <div class="number">
                        <span onclick={() => click(1)}>1</span>
                        <span onclick={() => click(2)}>2</span>
                        <span onclick={() => click(3)}>3</span>
                    </div>
                    <div class="symbol">
                        <span onclick={() => setOperator("+")}>+</span>
                    </div>
                </div>
                <div class="row">
                    <div class="number">
                        <span class="dull" onclick={()=> reset()}>AC</span>
                        <span onclick={() => click(0)}>0</span>
                        <span onclick={() => setOperator("*")}>*</span>
                    </div>
                    <div class="symbol action">
                        <span onClick={() => result()}>=</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
