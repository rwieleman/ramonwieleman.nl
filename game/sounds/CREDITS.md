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

The files here are the mp3 previews Freesound serves. `npm run gen:engines` takes the steadiest three seconds of each, cuts them into a loop that goes round without a click, makes all loops equally loud and writes them to `public/sounds/`. To use another recording, replace the mp3, change its entry under `recordings` in `src/data/sound.json` and run the script again.

How fast a loop is played at idle and at full revs (`idleRate`, `topRate`) and how loud it is (`volume`) are in the same place.
