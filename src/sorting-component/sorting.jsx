import React from 'react';
import './sorting.css';
import { getMergeSortAnimations } from '../algorithms/mergeSort';
import { getBubbleSortAnimations } from '../algorithms/bubbleSort';
import { getQuickSortAnimations } from '../algorithms/quickSort';  //will include later


export default class Sorting extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            // AL:100,
            array: [],
        };
    }

    componentDidMount(){
        this.newArray();
    }

    newArray(){
        const array  = [];
        // this.setState({AL : parseInt(prompt("Enter length of String","100"))});
        for(let i=0;i<100;i++)
        {
            array.push(randomNumber(10,700));
        }
        array.push(701);
        this.setState({array});
        // this.setState({array : array});
    }

    mergeSort(){

        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('numBar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'red' : 'blue';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 2);
        } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 2);
        }
        }
    }

    
    quickSort(){
        const animations = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('numBar');
        const isColorChange = i % 2 === 0;
        if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color =  'blue';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 4);
        } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 4);

        }
        }

    }
    

    bubbleSort(){
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('numBar');
        const isColorChange = i % 2 === 0;
        if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 4 === 0 ? 'red' : 'blue';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 2);
        } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 2);
        }
        }
    }

    render() {
        const {array} = this.state;

        return <div className='arrayCont'>
            {
                array.map((value,idx) => (
                    <div className='numBar' key={idx} style={{
                        backgroundColor: value === 701 ? 'aquamarine' : 'blue',
                        height:`${value}px`
                    }}>
                    </div>
                ))
            }
            
            <div className='but'>
            <button onClick={()=> this.newArray()}>NewArray</button>
            <button onClick={()=> this.mergeSort()}>MergeSort</button>
            <button onClick={()=> this.bubbleSort()}>BubbleSort</button>
            <button onClick={()=> this.quickSort()}>QuickSort</button>
            {/* <form className='in'>
                <label htmlFor='a1'>Array length:</label>
                <input type="number" name="a1" id="a1"
                onChange={(e)=>{ this.setState({AL : parseInt(e.target.value)})}}/>
            <button type="submit" className="btn">Insert</button>
            </form> */}
            </div>
            </div>;
        ;
    }


}

function randomNumber(min,max){

    return Math.floor(Math.random()*(max-min+1) + min );

}
