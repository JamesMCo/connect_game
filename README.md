Connect Game
============

Connect game is based on the BBC show [Only Connect](http://www.bbc.co.uk/programmes/b00lskhg). It was originally designed to be projected or otherwise displayed on a large screen, with the host controlling the game from a keyboard. (The game was designed to be controlled with a steam controller mapped to the controls, but this isn't necessary to use the game).

# Setup
Either visit [the online version](https://jammy4312.me/connect_game), or:
1. Download the repository to your computer. [[Link](https://github.com/JamesMCo/connect_game/archive/master.zip)]
2. Modify the `data.js` file to include your own connecting words or sequences.
3. Open the `index.html` file in your browser.

## `data.js` file
The `data.js` file is organised as follows:
```javascript
questions = [
["Clue One", "Clue Two", "Clue Three", "Clue Four", "Question Explaination", "Question Type"]
]
```
The first four items per question are the four clues that players will see (in a sequence question, they will only see three clues before the connection is revealed). The fifth item is the text explaining what the connection between the clues was. The final item defines the question type, and it must be either `connect` or `sequence`. A connection question, identified to the players by a **blue** UI, shows the four clues and asks the players to find how the four are related, whereas a sequence question, identified to the players by a **green** UI, will ask the players to find the fourth item in the given sequence.

# Game Controls
## Selection Screen
| Key | Action                                                                               |
| --- | ------------------------------------------------------------------------------------ |
|  a  | Select the top-left question                                                         |
|  b  | Select the top-middle question                                                       |
|  c  | Select the top-right question                                                        |
|  d  | Select the bottom-left question                                                      |
|  e  | Select the bottom-middle question                                                    |
|  f  | Select the bottom-right question                                                     |
|  n  | Open question from the selection screen (requires a-f to be selected first)          |
|  r  | Reset the "played" status of the question buttons (doesn't reset played questions\*) |

*\*Questions are randomly selected from the `data.js` file when transitioning from the selection screen to the question screen - as such, the selection screen has no real effect on the selected question and therefore using `r` to reset the buttons doesn't reset the questions themselves (this is done by refreshing the page).*

## Question Screen
| Key | Action                                                                               |
| --- | ------------------------------------------------------------------------------------ |
|  n  | Display the next clue/connection explaination/return to selection screen             |
|  q  | Display all of the clues without displaying the explaination text                    |
