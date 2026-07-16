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
1. They have written one of the three options (rock, paper and scissors).
2. No matter how they wrote that option, we are going to user ".tolowercase" function to make it validate for the next tasks.
3. If the user wrote any other thing, we are going to ask them again to write it.

After validating those steps, we'll store that data into a variable and return it to user it later.
While we have the user's choice, we are going to generate the machine's choice randomly.
We are going to create a function that choose between the options.
1. The options will be stored in an array (those options will be lowercase too).
2. Then, we are going to use a Random library, with a limitiation between 0 and 2 (becuase the array has 3 elemnts that counts since 0 index).
3. With that choose, we are going to extract the random elemnt by the number choose in the random function.

After getting the machine and user's choice, we are going to make the comparative with another function.
1. We are going to recollect the machine and user's options. 
2. We are going to create two functions: One to make the comparetive, another one to convert the choices into numbers, and the other way around. Why? Becuase the contraste between numbers is better and noticeable than make the comparative among every possible possibility.
3. Then, we are going to add the possible victoures to another variable called rounds.

Note: This README.ME will change as the project makes progress.