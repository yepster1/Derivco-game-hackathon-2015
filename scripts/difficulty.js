//MAkes buttons appear when play is pushed. move play to centre and make bigger. Difficulty Easy/Med/Hard/Insane		Increase Res. Three different backgrounds

gameover          = false;
render            = true;
debug             = true;
drag              = 50;
bulletTime        = 0;	
keyboard_down     = false;
difficulty        = 1;
max_pickups       = 5-difficulty;
pickup_bonus_ammo = 5-difficulty;
pickup_bonus_life = 300/difficulty;
max_velocity      = 150+(50*difficulty);
max_asteroids     = 6 * difficulty;
ammo              = 4 - difficulty;
max_acceleration  = difficulty;
difference        = 0.3 + difficulty/20;
if (difficulty == 3) light = 300;
else light = 600 - (100 * difficulty);