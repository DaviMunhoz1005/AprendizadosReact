import React, { useState } from 'react';
import './../assets/css/components/calculators.css';

function Calculator() {

    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        setInput(prevInput => prevInput + value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleCalculate = () => {
        try {
            setResult(eval(input) || '');
        } catch (e) {
            setResult('Error');
        }
    };

    return (
        <div className="container">
            <h1>Calculadoras</h1>
            <ul>
                <li>Básica</li>
                    <div className="basicCalculator">
                    <div className="display">
                        <div className="input">{input}</div>
                        <div className="result">{result}</div>
                    </div>
                    <div className="buttonsNumbers">
                        <button onClick={() => handleButtonClick('1')}>1</button>
                        <button onClick={() => handleButtonClick('2')}>2</button>
                        <button onClick={() => handleButtonClick('3')}>3</button>
                        <button onClick={() => handleButtonClick('+')}>+</button>
                        <button onClick={() => handleButtonClick('4')}>4</button>
                        <button onClick={() => handleButtonClick('5')}>5</button>
                        <button onClick={() => handleButtonClick('6')}>6</button>
                        <button onClick={() => handleButtonClick('-')}>-</button>
                        <button onClick={() => handleButtonClick('7')}>7</button>
                        <button onClick={() => handleButtonClick('8')}>8</button>
                        <button onClick={() => handleButtonClick('9')}>9</button>
                        <button onClick={() => handleButtonClick('*')}>*</button>
                        <button onClick={() => handleButtonClick('0')}>0</button>
                        <button onClick={handleClear}>C</button>
                        <button onClick={handleCalculate}>=</button>
                        <button onClick={() => handleButtonClick('/')}>/</button>
                    </div>
                    </div>
                <li>Científica</li>
                    <div className="cientificCalculator">
                        <div className="display">
                            <div className="input">{input}</div>
                            <div className="result">{result}</div>
                        </div>
                    <div className='buttons'>
                        <div className='buttonsOperations'>
                            <button onClick={handleClear}>C</button>
                            <button onClick={() => handleButtonClick('/')}>/</button>
                            <button onClick={() => handleButtonClick('*')}>*</button>
                            <button onClick={() => handleButtonClick('-')}>-</button>
                            <button onClick={() => handleButtonClick('+')}>+</button>
                            <button onClick={() => handleButtonClick('/100')}>%</button>
                            <button onClick={() => handleButtonClick('**')}>x²</button>
                        </div>
                        <div className='buttonsNumbers'>
                            <button onClick={() => handleButtonClick('6')}>6</button>
                            <button onClick={() => handleButtonClick('7')}>7</button>
                            <button onClick={() => handleButtonClick('8')}>8</button>
                            <button onClick={() => handleButtonClick('9')}>9</button>
                            <button onClick={() => handleButtonClick('2')}>2</button>
                            <button onClick={() => handleButtonClick('3')}>3</button>
                            <button onClick={() => handleButtonClick('4')}>4</button>
                            <button onClick={() => handleButtonClick('5')}>5</button>
                            <button onClick={() => handleButtonClick('0')}>0</button>
                            <button onClick={() => handleButtonClick('1')}>1</button>
                            <button onClick={() => handleButtonClick('.')}>.</button>
                            <button onClick={handleCalculate}>=</button>
                        </div>
            </div>
                </div>
                <li>Financeira</li>
                    <iframe
                        src="https://www.calculadoraonline.com.br/financeira"
                        title="Calculadora"
                        width="100%"
                        height="500px"
                        style={{ border: 'none' }}
                        allowFullScreen
                    ></iframe>
                <li>Gráfica</li>
                    <iframe
                        src="https://www.desmos.com/calculator?lang=pt-BR"
                        title="Calculadora"
                        width="100%"
                        height="500px"
                        style={{ border: 'none' }}
                        allowFullScreen
                    ></iframe>
            </ul>
        </div>
    );
}
export default Calculator;