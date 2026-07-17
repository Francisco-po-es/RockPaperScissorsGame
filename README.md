# RockPaperScissorsGame
This is a game project using javascript and HTML files. There's no need to use CSS at the moment.

In this project, I am going to use Problem Solving technique, which includes plan and pseudocode.

# Plan
- Does your program have a user interface? What will it look like? What functionality will the interface have?
As I explain before, I will not use CSS language at this moment.
- What inputs will your program have? Will the user enter data or will you get input from somewhere else?
The user will enter data by prompting, and I will save his answers in a variable called "userChoice".
- What’s the desired output?
There will be five rounds, and the user will play against the machine. The winner will be determined by the best out of five rounds.
- Given your inputs, what are the steps necessary to return the desired output?
The random and prompt libraries.
Functions with the next instructions:
1.  To store the data that the user will write in the prompts.
2.  To generate the machine's choice. 
3.  To compare between the user and the machines's choices.
4.  To count the winning rounds between the user and the machine.

# Pseudocode
Ask the user (via prompt) their choice.
When the user writes their choice, we have to verify the next steps.
1. No matter how they wrote that option, we are going to use the ".toLowerCase" function to make it validate for the next tasks.
2. They have to write one of the three options (rock, paper and scissors).
3. If the user wrote any other thing, we show an alert and ask them again to write it using the same function.

After validating those steps, we return the choice to use it later.
While we have the user's choice, we are going to generate the machine's choice randomly.
We are going to create a function that choose between the options.
1. The options will be stored in an array (rock, paper and scissors).
2. Then, we are going to use a random function, with a limitation between 0 and 2 (because the array has 3 elements that counts since 0 index).
3. With that choose, we are going to extract the random element by the number choose in the random function.

After getting the machine and user's choice, we are going to make the comparative with another function.
1. We are going to recollect the machine and user's options.
2. We are going to make the comparative directly matching the combinations (if it is a draw, if the user wins, or if the machine wins).
3. Depending on the winner, we are going to add the victory to a variable called rounds (user rounds or machine rounds) and show a message.

To make the game work, we are going to put everything together in a main function.
1. We are going to repeat the game in a loop while the user and the machine have less than 5 winning rounds.
2. When someone gets 5 rounds, the loop stops.
3. Finally, we are going to use another function to display the final winner of the best of five.