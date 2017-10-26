# MobileKombatNode

This is a bit of a custom fork of [mk.js](https://github.com/mgechev/mk.js).

You can control Mortal Kombat characters using SMS!

To use: Text `<player number><action>` to `(Phone Number TBA)`

Example: `1HP` would make player 1 throw a high punch.

Player numbers: `1`, `2`

Player commands: 

- `L` (left),
- `R` (right),
- `U` (up),
- `D` (down),
- `B` (block),
- `HK` (high kick),
- `LK` (low kick),
- `HP` (high punch),
- `LP` (low punch)

## Live Demo

Check out my hosted version [here](https://thawing-reaches-16401.herokuapp.com).

## Todo

* Implement a way for multiple games to be played simultaneously
	* Have phone connect to a 'room'

## Installing it on your own

Installation is super simple. Clone the repo, run npm install, and point your twilio SMS webhook to http://yoururl/webhook. That's it!
