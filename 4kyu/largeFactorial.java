import java.math.BigInteger;
public class Kata
{

  public static String Factorial(int n) {
     if (n < 0)  return null;
     else  return String.valueOf(bigFucktorial(new BigInteger(String.valueOf(n))));
  }
   static BigInteger bigFucktorial(BigInteger n) {
        return (n.compareTo(BigInteger.ZERO)==1) ? n.multiply(bigFucktorial(n.subtract(BigInteger.ONE))) : new BigInteger("1");
    }
}