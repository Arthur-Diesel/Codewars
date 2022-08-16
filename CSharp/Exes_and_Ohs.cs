using System.Linq;
using System;
public static class Kata 
{
    /*
    public static bool XO (string input)
    {
        int amountO = 0;
        int amountX = 0;
        char[] stringArray = input.ToCharArray();
        foreach(char character in stringArray){
        char lowCharacter = char.ToLower(character);
        if(lowCharacter == 'x'){
            amountX++;
        }
        if(lowCharacter == 'o'){
            amountO++;
        }
        }
        if(amountO == amountX){
        return true;
        }
        return false;
    }
    */
    /*
    public static bool XO (string input)
    {
        int amountO = input.ToLower().Count(c => c == 'o');
        int amountX = input.ToLower().Count(c => c == 'x');
        if(amountO == amountX){
            return true;
        }
        return false;
    }
    */
    public static bool XO (string input)
    {
        int amountO = input.ToLower().Count(c => c == 'o');
        int amountX = input.ToLower().Count(c => c == 'x');
        if(amountO == amountX) return true;
        return false;
    }
}