import { useEffect, useState } from "react";

const Calculator = () => {

    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    //const [clear, setClear] = useState(false);

    // get the operators value
    const operators = ['/', '*', '+', '-', '*', '%'];

    //this will be applied to the operators and make function when clicked
    const updateCalc = value => {
        //to limit the numbers of operators at a go
        if(
            operators.includes(value) && calc === '' ||
            operators.includes(value) && operators.includes(calc.slice(-1))
        ){
            return;
        }
        setCalc(calc + value);
        //to update result
        if(!operators.includes(value)){
            setResult(eval(calc + value).toString())
        }
    }
//the equalto button
    const total = () =>{
        setCalc(eval(calc).toString());
    }

    //the delete button
    const deleteButton = () =>{
        if(calc === ''){
            return;
        }else{
            const value = calc.slice(0, -1);
            setCalc(value);
        }
    }

    const clearbutton = () =>{
      const first = setCalc;
      const second = result

       delete clearbutton.first
       delete clearbutton.second
    }

    return ( 
        <div className="calculatorContent">
             <div id="calculatordisplay">
                <div className="previousDisplay">{result ?<span>{result}</span> : ''}</div>
                <div className="numberDisplay">{calc || ""}</div>
             </div>
             <div className="buttonOne">
                <button className="exempted" onClick={clearbutton}><b>CL</b></button>
                <button className="exempted" onClick={deleteButton}><b>DEL</b></button>
                <button onClick={() => updateCalc('%')}><b>%</b></button>
                <button onClick={() => updateCalc('/')}><b>/</b></button>
             </div>
             <div className="buttonOne">
                <button onClick={() => updateCalc((7).toString())}><b>7</b></button>
                <button onClick={() => updateCalc((8).toString())}><b>8</b></button>
                <button onClick={() => updateCalc((9).toString())}><b>9</b></button>
                <button onClick={() => updateCalc('*')}><b>*</b></button>
             </div>
             <div className="buttonOne">
                <button onClick={() => updateCalc((4).toString())}><b>4</b></button>
                <button onClick={() => updateCalc((5).toString())}><b>5</b></button>
                <button onClick={() => updateCalc((6).toString())}><b>6</b></button>
                <button onClick={() => updateCalc('-')}><b>-</b></button>
             </div>
             <div className="buttonOne">
                <button onClick={() => updateCalc((1).toString())}><b>1</b></button>
                <button onClick={() => updateCalc((2).toString())}><b>2</b></button>
                <button onClick={() => updateCalc((3).toString())}><b>3</b></button>
                <button onClick={() => updateCalc('+')}><b>+</b></button>
             </div>
             <div className="buttonTwo">
                <button onClick={() => updateCalc('0')}><b>0</b></button>
                <button onClick={() => updateCalc('.')}><b>.</b></button>
                <button className="equalto" onClick={total}><b>=</b></button>
             </div>
        </div>
     );
}
 
export default Calculator;