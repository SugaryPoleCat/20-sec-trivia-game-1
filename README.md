# 20-sec-trivia-game-1
The users should: 
Login through discord into teh website.
Unless admin, they should only be able to register NAME for the current game.
HOST should be able to give points to each user in the current game.
HOST should keep track of the amount of shots every player is taking.
Create API folder, that we can use to access from another service.

connects to the serene database, so we can get users from the main website.
Will have to use a seperate framework for the frontend, probably liek VUE.js or react.


UPDATE 1:
we might not even need API, since we are not savign anything to the database i think, thats better. We are just going to need the users to add a username, for the current session, to which we may allocate points to. 
Although, we could save their user info, to the database in the future, through an API.
IN THAT CASE, check out api.md