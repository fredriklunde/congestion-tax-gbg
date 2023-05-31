# Congestion Tax in Gothenburg

Congestion tax is charged during fixed hours for vehicles driving through in 
Gothenburg city centre. During the hours when congestion tax is charged, the 
vehicles are automatically registered at toll stations.

# Your task

Write a program that calculates the cost for a given set of comma separated 
dates and times when a car passes through toll stations during a day. 
Based on this, it should print the total cost to the terminal.

1. Implement the `PrintTotalAmount` function that takes a string containing date
and time and prints the correct congestion charge amount to the terminal based on 
the table below:

   |   Interval  | Amount |
   |    :---:    |   ---: |
   | 06:00–06:29 |   8 kr |
   | 06:30–06:59 |  13 kr |
   | 07:00–07:59 |  18 kr |
   | 08:00–08:29 |  13 kr |
   | 08:30–14:59 |   8 kr |
   | 15:00–15:29 |  13 kr |
   | 15:30–16:59 |  18 kr |
   | 17:00–17:59 |  13 kr |
   | 18:00–18:29 |   8 kr |
   | 18:30–05:59 |   0 kr |

   Example:   
   ```csharp
   Calculator.PrintTotalAmount("2023-05-31 17:45");
   // prints "The total fee is 13 kr" to the terminal
   ```

2. Extend the function so that it can take multiple, comma separated date&times,
and print the total amount (sum of each toll station pass fee).

   Example:   
   ```csharp
   Calculator.PrintTotalAmount("2023-05-31 08:00, 2023-05-31 12:00, 2023-05-31 12:45, 2023-05-31 17:45");
   // prints "The total fee is 42 kr" to the terminal
   ```

3. The maximum amount per day is 60 SEK. 

   Example:   
   ```csharp
   Calculator.PrintTotalAmount("2023-05-31 07:00, 2023-05-31 07:10, 2023-05-31 07:20, 2023-05-31 07:30");
   // prints "The total fee is 60 kr" to the terminal
   ```
   
4. No congestion tax is charged on Saturdays, Sundays, or during the month of July.

   Example:   
   ```csharp
   Calculator.PrintTotalAmount("2023-06-03"); // (Saturday) prints "The total fee is 0 kr" to the terminal
   Calculator.PrintTotalAmount("2023-06-04"); // (Sunday) prints "The total fee is 0 kr" to the terminal
   Calculator.PrintTotalAmount("2023-07-01"); // (July) prints "The total fee is 0 kr" to the terminal
   ```
   
5. A car passing multiple toll stations within 60 minutes is only charged once. 
The amount to be paid in that case is the highest fee among the passages.

   Example:   
   ```csharp
   Calculator.PrintTotalAmount("2023-05-31 06:20, 2023-05-31 06:45, 2023-05-31 07:10");
   // per pass: 8 kr, 13 kr, 18 kr
   // prints "The total fee is 18 kr" to the terminal
   ```
