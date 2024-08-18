import { add, multiply, divideTheFirstNumberByTheSecondNumber as divide } from '../../Utils/calculate';
import Watch from '../../Watch/Watch';

const Sunglass = () => {
    const first = 55;
    const second = 199;
    const sum = add(first, second);
    const mult = multiply(first, second);
    const div = divide (first, second);

    
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;