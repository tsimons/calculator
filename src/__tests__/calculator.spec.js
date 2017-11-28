import calculator from '../calculator';


describe('calculator', () => {
    
    describe('add', () => {
        
        it('adds numbers together', () => {
            const result = calculator.add(1, 2, 3, 4, 5, 6, 7, 8, 9);
            expect(result).toEqual(45);
        });
        
    });

    
    describe('subtract', () => {
        
        it('subtracts numbers', () => {
            const result = calculator.subtract(9, 1, 2, 3);
            expect(result).toEqual(3);
        });
        
    });


    
    describe('multiply', () => {
        
        it('multiplies numbers', () => {
            const result = calculator.multiply(2, 3, 4);
            expect(result).toEqual(24)
        });
        
    });
    
    describe('divide', () => {
        
        it('divides numbers', () => {
            const result = calculator.divide(18, 2, 3);
            expect(result).toEqual(3)
        });
        
    });
    
});
