# Engine recordings

The engines in the game are recordings of real vehicles, all from Freesound and all released by their makers under CC0 (public domain): no credit is required, but here it is.

| Vehicle in the game | Recording | By | Page |
|---|---|---|---|
| citycar | car idle (2002 Mini Cooper) | seth-m | https://freesound.org/people/seth-m/sounds/269771/ |
| sedan | stationair2 (1985 Ford Escort) | escortmarius | https://freesound.org/people/escortmarius/sounds/141457/ |
| sportscar | Porsche idle | victormalloy | https://freesound.org/people/victormalloy/sounds/113216/ |
| van | engine idle van diesel exhaust | kyles | https://freesound.org/people/kyles/sounds/453995/ |
| truck | Diesel Truck Idling Front | ibirdfilm | https://freesound.org/people/ibirdfilm/sounds/128160/ |
| tank | t26_moving_01 (T-26 tank) | greatmganga | https://freesound.org/people/greatmganga/sounds/329800/ |
| cruiser | Muscle_Idle | FreeCarSoundsGaming | https://freesound.org/people/FreeCarSoundsGaming/sounds/535038/ |
| interceptor | S007_Engine_High_Rev_Mono | Pól | https://freesound.org/people/P%C3%B3l/sounds/385932/ |
| armoured | Idling Truck stereo (Mack truck) | itinerantmonk108 | https://freesound.org/people/itinerantmonk108/sounds/864821/ |
| motorbike | XSR700 tickover loop (Yamaha XSR700) | richwise | https://freesound.org/people/richwise/sounds/432304/ |
| bus | Bus Engine Idling | bikesnbassboi | https://freesound.org/people/bikesnbassboi/sounds/540398/ |
| ambulance | Idling HandiVan (a van for wheelchair transport; no CC0 recording of an ambulance standing still was found) | deleted_user_8803593 | https://freesound.org/people/deleted_user_8803593/sounds/444261/ |

The files here are the mp3 previews Freesound serves. `npm run gen:engines` takes the steadiest three seconds of each, cuts them into a loop that goes round without a click, makes all loops equally loud and writes them to `public/sounds/`. To use another recording, replace the mp3, change its entry under `recordings` in `src/data/sound.json` and run the script again.

How fast a loop is played at idle and at full revs (`idleRate`, `topRate`) and how loud it is (`volume`) are in the same place.

## Other recordings

Also from Freesound, also CC0.

| In the game | Recording | By | Page |
|---|---|---|---|
| squealing tyres | Chrysler LHS tire squeal 04 | audible-edge | https://freesound.org/people/audible-edge/sounds/71739/ |
| police: "Freeze!" | Freeze 2 | cejordi84 | https://freesound.org/people/cejordi84/sounds/217231/ |
| police: "Let's see those hands!" | Let's See Those Hands | cejordi84 | https://freesound.org/people/cejordi84/sounds/217232/ |
| police: "Freeze! Don't move!" | MISC_Police_Siren_In_Stop_Officer_001 (the officer on the loudspeaker of his car; the siren before it is cut off) | conleec | https://freesound.org/people/conleec/sounds/159755/ |
| police: "You are under arrest!" | you are under arrest | riippumattog | https://freesound.org/people/riippumattog/sounds/823506/ |
| a scream (woman) | woman scream | starnezio | https://freesound.org/people/starnezio/sounds/609973/ |
| a scream (man) | Panic-stricken screaming #2 | Klangkobold | https://freesound.org/people/Klangkobold/sounds/547964/ |
| a scream (man) | Male_Scream_3 | tonsil5 | https://freesound.org/people/tonsil5/sounds/416543/ |
| a scream (woman) | VA FR - Mom - Pack rapide - Onomatopees - cris peur - NT5 | Sadiquecat | https://freesound.org/people/Sadiquecat/sounds/874452/ |
| a scream (young man) | Susto | eudes87 | https://freesound.org/people/eudes87/sounds/402405/ |
| a scream (woman) | Female Startled Scream Sound Effect | DarkNightPrincess | https://freesound.org/people/DarkNightPrincess/sounds/625318/ |

The same script cuts these: a loop of two seconds for the tyres, and each voice and each scream without the silence around it.
