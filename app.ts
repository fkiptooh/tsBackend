let printNumber = (startNumber: number, endNumber: number) => {
    let temp: string = ``;
    if (startNumber < endNumber) {
        for(let i:number = startNumber; i <= endNumber; i++) {
            temp+= `${i} `;
        }
        console.log(temp);
    } else {
        console.log("Invalid inputs");
    }
}

printNumber(1,10);