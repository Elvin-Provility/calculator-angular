import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  inputValue = '';
  resultValue: any = 0;

  clickAddNum(number:any) {
    this.inputValue += number;
  }

  clickDel() {
    this.inputValue = '';
    this.resultValue = 0;
  }

  ClickEquResult() {
    let num = this.inputValue;
    let total = this.evalution(num);
    this.resultValue = 'Ans = ' + total;
  }
  evalution(myArray:any) {
    const inputArrays = myArray.split('');
    const numArray = myArray.split(/[/,*,+,-]/);
    const operatorArray = [];
    const resultArray = [];
    for (let i = 0; i < inputArrays.length; i++) {
      if (isNaN(inputArrays[i])) {
        operatorArray.push(inputArrays[i]);
      }
    }
    for (let i = 0; i < numArray.length; i++) {
      resultArray.push(numArray[i]);
      if (i < operatorArray.length) {
        resultArray.push(operatorArray[i]);
      }
    }
    var result = this.calculate(resultArray);
    return result;
  }
  calculate(inputArray:any) {
    let initialValue = inputArray[0];
    let numValue = parseInt(initialValue);
    let result = numValue;
    for (let i = 2; i < inputArray.length; i = i + 2) {
      initialValue = inputArray[i];
      numValue = parseInt(initialValue);
      let operator = inputArray[i - 1];
      switch (operator) {
        case '/':
          result /= numValue;
          break;
        case '*':
          result *= numValue;
          break;
        case '-':
          result -= numValue;
          break;
        case '+':
          result += numValue;
          break;
      }
    }
    return result;
  }

}
