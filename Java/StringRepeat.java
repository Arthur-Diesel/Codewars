public class StringRepeat {
    public static String repeatStr(final int repeat, final String string) {
      String finalString = "";
        for(int counter = 0; counter < repeat; counter++){
          finalString += string;
        }
      return finalString;
    }
}
