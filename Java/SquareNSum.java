public class SquareNSum {
  public static int squareSum(int[] n) { 
        int sum = 0;
        for(int number: n){
            sum += number * number;
        }
        return sum;  
    }
}

/*
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class SolutionTest {
    @Test
    void testSomething() {
        assertEquals(4.0, Multiply.multiply(2.0,2.0));
        assertEquals(4.5, Multiply.multiply(2.25,2.0));
    }
}
*/