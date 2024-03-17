export class MathUtil {
    public static printMathTable(value: number): string {
        let temp: string = ``;
        for(let i: number = 1; i <= value; i++) {
            temp += `${value} X ${i} = ${value * i} \n`;
        }
        return temp;
    }
}