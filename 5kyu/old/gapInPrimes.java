import java.util.Arrays;

class GapInPrimes {
    
    public static long[] gap(int g, long m, long n) {
        long[] arr = new long[2];
        long prev_number=0;
        for(long i=m; i<=n; i++) {
            if(isPrime(i)) {
               if(prev_number>0 && i-prev_number == g) {
                   arr[0]=prev_number;
                   arr[1]=i;
                   return arr;
               }
               prev_number=i;
            }
        }
        return null;
    }
       private static boolean isPrime(long number) {
        long sqrtNumber = (int) (Math.sqrt(number));
        for (long i = 2; i <= sqrtNumber; i++) {
            if (number % i == 0)   return false;
        }
        return true;
    }
}