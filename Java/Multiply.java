public class Multiply {
    public static Double multiply(Double a, Double b) {
        return a * b;
    }
}

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class SolutionTest {
    @Test
    void testSomething() {
        assertEquals(4.0, Multiply.multiply(2.0,2.0));
        assertEquals(4.5, Multiply.multiply(2.25,2.0));
    }
}
