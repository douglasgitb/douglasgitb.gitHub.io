**************************************************************************
*                                                                        *
*                         STERN PINBALL, INC.                            *
*             (C) COPYRIGHT 1999-2007, STERN PINBALL, INC.               *
*                                                                        *
**************************************************************************

------------------------------------------------------------------------------
CPU Release	5.00
Date                  July 2, 2007

Game ROM   1M     U210            $F0FF    5.00      spp-cpu.500

Changes from Game ROM v4.00
---------------------------
- *** THIS GAME ROM REQUIRES DISPLAY VERSION 5.00 OR HIGHER. ***
- Mystery award no longer gives the same award back-to-back in competition
  mode.
- Mystery award no longer lights extra ball if one was already lit.
- Mystery award no longer lights special if one was already lit.
- Kwik-E-Mart standup now changes digits correctly in competition mode.
- HSTD Reset now also resets Grand Champion (there is now no way to manually
  erase the non-grand-champion scores, they will reset themselves only on
  the HSTD Reset Count adjustment).  This is to address not being able to
  change the default grand champion score.
- If an Otto award gets stacked in the display queue, it will now show the
  correct shot that was doubled (previously it would generally always show
  upper playfield at 2x scoring if it was queued).
- Homer's TV-lit speech now takes priority over Krusty's quotes again, and
  will also be heard if the display effect doesn't get to run.
- TV start effects now stack after combo and other awards.
- Couch lock and multiball start animations now stack after combo and other
  awards.
- Major award events (e.g. TV mode start, Otto award, Treehouse awards) now
  only hold up the device they are associated with, not all kicking devices.
- Combo awards now awarded before anything else on a given shot.
- Itchy and Scratchy eject now double-checks to make sure the targets are
  actually down before trying to eject the ball.  It also waits until any
  drop target reset process is complete before kicking.
- Otto eject now has more low-power kick table entries.
- Couch multiball start lamp effect now called from the display effect.
- Couch multiball start lamp effect now goes away properly if the start
  display effect is blown off.
- New U.S. default pricing, 1/.75, 3/$2.00   



------------------------------------------------------------------------------
Display Release       5.00
Date                  

Display    4M     Rom 0           $7E51    5.00      sppdspi.500
Display    4M     Rom 0           $A242    5.00      sppdspl.500
Display    4M     Rom 0           $5EA7    5.00      sppdspf.500
Display    4M     Rom 0           $FFC1    5.00      sppdspg.500
Display    4M     Rom 0           $B649    5.00      sppdspa.500


Changes from Display v4.00
--------------------------
- *** THIS DISPLAY ROM REQUIRES GAME VERSION 5.00 OR HIGHER. ***
- Display-side support for .75 pricing.

------------------------------------------------------------------------------
CPU Release	4.00
Date                  July 14, 2003

Game ROM   1M     U210            $4FFF    4.00      spp-cpu.400

Changes from Game ROM v3.00
---------------------------
- *** THIS GAME ROM REQUIRES DISPLAY VERSION 4.00 OR HIGHER. ***
- Now properly light special during SDMEWM.
- Fixed a bug in switch dispatching that would sometimes cause a switch
  to either double-register or register on powerup.
- Fixed a nasty bug with Mystery awarding LIGHT LOCK in higher difficulty
  couch locks.  If you were on a multiball that required LIGHT LOCK to be
  hit in order and had already completed the LIGHT portion, then got
  LIGHT LOCK from Mystery, you would not be able to progress towards
  Couch Multiball anymore.  Being awarded LIGHT LOCK from Mystery will
  now turn off the LIGHT LOCK targets if locks are not allowed to be
  stacked.
- Fixed a bug where display effects would be aborted with just the right
  flipper instead of both flippers at the same time.
- Added a timeout for the transition of shooter groove to mainplay if for
  some reason the cpu is not getting the signal from the sound section.
- Added 2 display effect calls for CBG Secret Stash:  CBG Secret Stash
  Start and the notice that all shots are relit.
- Added Feature Adjustment 36 - Allow Volume Effects.  Default is YES.
  When set to YES, the game will increase the volume during certain events
  (typically multiballs).  When set to NO, the volume will not be messed
  with.  If the game volume is set to 0 (OFF), then this adjustment will
  be treated as set to NO.

------------------------------------------------------------------------------
Display Release       4.00
Date                  July 14, 2003

Display    4M     Rom 0           $4DE6    4.00      sppdspi.400
Display    4M     Rom 0           $8665    4.00      sppdspl.400
Display    4M     Rom 0           $4EC4    4.00      sppdspf.400
Display    4M     Rom 0           $8A03    4.00      sppdspa.400

Changes from Display v3.00
--------------------------
- *** THIS DISPLAY ROM REQUIRES GAME VERSION 4.00 OR HIGHER. ***
- Display-side support for new adjustment.

------------------------------------------------------------------------------
CPU Release	3.00
Date                  April 26, 2003

Game ROM   1M     U210            $B8FF    3.00      spp-cpu.300

Changes from Game ROM v2.07
---------------------------
- *** THIS GAME ROM REQUIRES DISPLAY VERSION 3.00 OR HIGHER. ***
- Properly chalk wins in all tv modes now.
- Altered difficulty of Scratchy's Revenge.  In order to light the first
  super jackpot, you now need to make 15 jackpots MINUS the number of
  Itchy & Scratchy multiball super jackpots earned in that cycle (the
  minimum number of jackpots is 5).  For subsequent super jackpots in the
  same Revenge multiball, 15 jackpots are needed to light.
- The number of ratings points for Krusty's Last Stand that you get for
  shooting the right orbit has been doubled to 20, which is what I meant
  for it to be all along.  With a good spinner, this should cause the mode
  to be finishable in 3 shots, with a maximum of 5 shots.
- Altered difficulty of Alien Invasion.  Now the time you get for
  completing AI is based on the number of TV modes you have WON in that
  cycle.  The time is 45 seconds, plus 5 seconds for every mode won.  If
  all 7 modes were won, then AI's timer starts at the maximum of 99
  seconds.
- Added player-abort feature for Alien Invasion.  If a ball becomes
  hopelessly stuck (e.g. 2 balls sneak behind the I&S drop targets), then
  the player may hold in the start button for one second.  This will kick
  out ALL currently locked balls with no effect on the stage or the
  ballsaver.  The player may then try again to lock all of the balls for
  that stage.  It is recommended to abort the current stage as soon as a
  ball is trapped because no ballsaver will come on when kicking out the
  balls.
- Victory Laps now cash-in correctly when Alien Invasion starts.
- Fixed a nasty bug that would carry over the Victory Lap value across
  Invasion, possibly inflating Victory Laps for TV modes won on the same
  ball after Invasion finished.
- It is now impossible to change the Adult Content adjustment when the
  game is dipped for Chuck E. Cheese.
- Added Standard Adjustment 47 - Ticket Dispenser Installed.  Default is
  NO.  When set to YES, the game will attempt to give tickets when they
  are set as an award type.  This also disables any flipper stack
  switches that may be in a game (upper right flippers in the case of
  TSPP).
- Added Standard Adjustment 48 - Allow Player Competition.  Default is
  YES.  When set to YES, players may activate competition-mode games by
  holding in the left flipper for a second.  If a game can be started
  (i.e. there are credits on it), a countdown will show up on the display.
  Hitting the start button during this countdown puts the game into
  competition mode for that game only (but for all players of that game).
  See notes below for details on Competition Mode rules.
- Added Standard Adjustment 49 - Show Tech Alert.  Default for now is
  NEVER.  This adjustment controls where/when the Tech Alert message will
  pop up:  POWERUP shows the message after booting and before games can
  be started; COIN DOOR OPEN shows the message when the coin door opens
  up; POWERUP AND COIN DOOR for both of the above; NEVER will never show
  Tech Alert Alert.
- Improved some choreography for Pretzel Multiball.
- Added Pretzel Multiball Total page.


------------------------------------------------------------------------------
Display Release       3.00
Date                  April 26, 2003

Display    4M     Rom 0           $620B    3.00      sppdspi.300
Display    4M     Rom 0           $95F1    3.00      sppdspl.300
Display    4M     Rom 0           $629C    3.00      sppdspf.300
Display    4M     Rom 0           $9920    3.00      sppdspa.300

Changes from Display v2.01
--------------------------
- *** THIS DISPLAY ROM REQUIRES GAME VERSION 3.00 OR HIGHER. ***
- Display-side support for new adjustments.
- Added some wizard mode start information screens.

------------------------------------------------------------------------------
CPU Release	2.07
Date                  March 27, 2003

Game ROM   1M     U210            $B2FF    2.07      spp-cpu.207

Changes from Game ROM v2.06
---------------------------
- removed DEVELOPMENT settings from previous release

------------------------------------------------------------------------------
CPU Release	2.06
Date                  March 27, 2003

Game ROM   1M     U210            $DDFF    2.06      spp-cpu.206

Changes from Game ROM v2.05
---------------------------
- default french replay level now 12M
- added replay logic to evaluate recent games to determine if the replay
  level should be raised/lowered or remain the same

------------------------------------------------------------------------------
CPU Release	2.05
Date                  March 22, 2003

Game ROM   1M     U210            $FFFF    2.05      spp-cpu.205

Changes from Game ROM v2.04
---------------------------
- *** THIS ROM HAS NOT BEEN RELEASED.  IT IS BEING BROUGHT TO ASI 2003. ***
- *** THIS GAME ROM REQUIRES DISPLAY VERSION 2.00 OR HIGHER. ***
- Fixed issues related to restarting a game in progress (endless tilt,
  free ball save).
- Fixed Show Upper Flippers adjustment (it works now).
- Tilting before valid playfield on ball 1 now won't say The Simpsons again.
- Tilt won't reserve and plunge a drained ball if valid playfield didn't
  occur.
- Drop Target Hurryup now killed at Invasion start.
- Issues with Invasion stage getting confused shouldn't occur now.
- Invasion should now score correctly (1M * balls locked, not always 2M).
- Bug that prevented bonus speech from happening fixed.
- SMS flippers now work correctly if it is restarted.
- Added deff for Couch Lock Lit.
- Nuclear Disaster won/lost effects now work correctly.
- Mystery lock award labels fixed.
- Nuclear Disaster background now goes away properly when you win it.
- Lots of light shows added for SMS and Revenge.

------------------------------------------------------------------------------
CPU Release	2.04
Date                  February 28, 2003

Game ROM   1M     U210            $70FF    2.04      spp-cpu.204

Changes from Game ROM v2.03
---------------------------
- *** THIS GAME ROM REQUIRES DISPLAY VERSION 2.00 OR HIGHER. ***
- Tech Alert removed.  Now your game just magically works all the time.

------------------------------------------------------------------------------
Display Release       2.01
Date                  February 26, 2003

Display    4M     Rom 0           $B67E    2.01      sppdspi.201
Display    4M     Rom 0           $E906    2.01      sppdspl.201
Display    4M     Rom 0           $81F3    2.01      sppdspf.201
Display    4M     Rom 0           $F27E    2.01      sppdspa.201

Changes from Display v2.00
--------------------------
- Dr. Pinball switch test now displayed correctly 

------------------------------------------------------------------------------
CPU Release	2.03
Date                  February 26, 2003

Game ROM   1M     U210            $54FF    2.03      spp-cpu.203

Changes from Game ROM v2.02
---------------------------
- *** THIS GAME ROM REQUIRES DISPLAY VERSION 2.00 OR HIGHER. ***
- Fixed a problem with going to the wrong menu for Dr. Pinball.
- Fixed a nasty problem with the HOLD COUCH LOCKS adjustment.  If balls
  were in the couch at the start of a multiplayer game and this adjustment
  was set for 1-PLAYER GAMES, player 1 would get screwed with never being
  able to start Couch Multiball.
- Fixed Scratchy's Revenge being able to start during Alien Invasion.
  Now it is properly unable to start until after Invasion is over.
- Added "Chaos Mode" for helping clear balls out of the VUK in very
  early production games.
- Fixed Alien Invasion not resetting its total.
- Fixed a problem in Alien Invasion where if a ball was locked before
  all the balls were autolaunched from the trough, it would not get
  the proper number of balls into play.
- Fixed an obscure problem in Alien Invasion where if you started it with
  2 balls locked in the couch, locked one of the balls, then drained the
  other, it would just sit there until the mode ended.
- Added a bunch of switch compensation, more to come.

------------------------------------------------------------------------------
CPU Release	2.02
Date                  February 19, 2003

Game ROM   1M     U210            $1EFF    2.02      spp-cpu.202

Changes from Game ROM v2.01
---------------------------
- *** THIS GAME ROM REQUIRES DISPLAY VERSION 2.00 OR HIGHER. ***
- Sound test fixed for real now.  Really.
- Hurryup value bug fixed.

------------------------------------------------------------------------------
CPU Release	2.01
Date                  February 17, 2003

Game ROM   1M     U210            $53FF    2.01      spp-cpu.201

Changes from Game ROM v2.00
---------------------------
- *** THIS GAME ROM REQUIRES DISPLAY VERSION 2.00 OR HIGHER. ***
- Sound ROM test now correctly identifies which sound calls come from which
  physical ROM.
- Fixed memory extra balls and specials staying lit between games.
- Increased ballsaver time for Pretzel Multiball.
- Invasion Total deff stays up much longer now.
- Upper Bart made switch will now also do normal captive ball work.  This
  causes the following to occur:  When the mechanism is normally-working,
  very hard shots will basically give 2 awards.  When Bart is stuck along
  the way, a solid hit to the captive ball should send Bart back far
  enough to score one award, keeping the feature alive.

------------------------------------------------------------------------------
CPU Release	2.00
Date                  February 10, 2003

Game ROM   1M     U210            $44FF    2.00      spp-cpu.200

Changes from Game ROM v1.04
---------------------------
- *** THIS GAME ROM REQUIRES DISPLAY VERSION 2.00 OR HIGHER. ***
- Fixed some bogus sound calls during HSTD.
- Fixed Monorail Mode shot award display.
- Instant Info fully implemented.
- Added better explanations to some secret award display effects.
- More speech/choreography.
- Tried to trap a situation where CBG Hurryup goes into Never-Never Land.
- Made Nuclear Value Award screen more informative (no one knew you could
  get extra balls from it).
- Extended Springfield Mystery Spot jackpot display effect times.
- All audits should be chalking properly now.
- Implemented Garage Door Difficulty adjustment.  This allows the Garage
  Door to reopen automatically under certain circumstances as follows:
  - Extra Easy:  Until Couch Multiball is started.
  - Easy:  Until any couch lock is made.
  - Moderate:  Until any couch lock or tv mode started.
  - Hard:  Until any couch lock, tv mode started, or mystery lit.
  - Extra Hard:  Never reopens
  The default setting for this adjustment from Extra Easy install to Extra
  Hard install is as follows:  Extra Easy; Extra Easy, Easy, Moderate, Hard.
- Implemented Hold Couch Locks adjustment.  This allows the couch to hold
  onto balls between games and between players.  The settings are:
  - Never:  Couch always empties at game over, no locks are ever held.
  - 1 Player Games:  Couch doesn't empty at game over and anyone playing a
    1-player game can steal any locked balls.
  - Always:  Couch doesn't empty at game over, AND players can steal other
    players' locks.
  This adjustment will be treated as Never if Competition Mode is on.
  During tournament games, balls will stay physically locked, but players
  must still make 3 locks in order to start Couch Multiball.
  The default setting for this adjustment from Extra Easy install to Extra
  Hard install is as follows:  1 Player Games, 1 Player Games, 1 Player
  Games, Never, Never. 
- Implemented Adult Content adjustment.  When off, the following phrases
  are removed from the game:
  - Kick ass, man!
  - Holy crap!
  - Somebody check the men's room for a Hugh Jass.
  - Cheating makes Baby Jesus cry.
- Fixed no-memory specials and extra balls staying lit even though they
  would correctly not award anything if they were achieved on a subsequent
  ball.

------------------------------------------------------------------------------
Display Release       2.00
Date                  February 10, 2003

Display    4M     Rom 0           $B6CF    2.00      sppdspi.200
Display    4M     Rom 0           $E95B    2.00      sppdspl.200
Display    4M     Rom 0           $824A    2.00      sppdspf.200
Display    4M     Rom 0           $F2CF    2.00      sppdspa.200

Changes from Display v1.04
--------------------------
- *** THIS DISPLAY ROM REQUIRES GAME VERSION 2.00 OR HIGHER. ***
- Display-side support for all new CPU features.
- More translations added.
- Renamed Horrifically Big Points.
- Support added for other things that I'm not calling yet, but a later
  2.x CPU won't need a display update.

------------------------------------------------------------------------------
Display Release       1.04
Date                  January 29, 2003

Display    4M     Rom 0           $2A0E    1.04      sppdspi.104
Display    4M     Rom 0           $58AF    1.04      sppdspl.104
Display    4M     Rom 0           $E669    1.04      sppdspf.104
Display    4M     Rom 0           $568B    1.04      sppdspa.104

Changes from Display v1.03
--------------------------
- added italian translations
- fixed instant info display effects from not appearing
- adult speech setting fixed

------------------------------------------------------------------------------
Display Release       1.03
Date                  January 27, 2003

Display    4M     Rom 0           $1ce2    1.03      sppdspl.103
Display    4M     Rom 0           $abc6    1.03      sppdspf.103
Display    4M     Rom 0           $17d7    1.03      sppdspa.103

Changes from Display v1.02
--------------------------
- added spanish translations
- added/fixed several french/german translations
- added "replay at" messaging to player score screens

------------------------------------------------------------------------------
CPU Release	1.04
Date		January 24, 2003

Game ROM   1M     U210            $2EFF    1.04      spp-cpu.104

Changes from Game ROM v1.03
---------------------------
- More choreography added and tweaked.
- Family lights now show Super Jackpot progress.
- Coil malfunction alerts added.
- Upper right eject firing logic altered.
- Put in real values for broken switch threshholds.
- Added logic for Get Duffed lamp.
- Added SDMEWM progress display effect.
- Added very basic SDMEWM start show.
- Balls kick out faster at start of multiballs now.
- Added replay-at display marquee call.
- Ensured SDMEWM drop targets always reset up.
- Fixed bully 3-bank light display during SDMEWM.
- Added TV and I&S mode select on right flipper.
- Competition mode added.  The rules for competition mode are as follows:
  - Otto shots start in the following order:
    - Pop bumpers
    - Left orbit
    - Left ramp
    - Kwik-E-Mart
    - Garage
    - Right loop (Otto)
    - Right ramp
    - Right orbit
    - Itchy & Scratchy
    - Upper playfield
  - Hurryups started in the following order:
    - Left orbit
    - Left ramp
    - Kwik-E-Mart
    - Garage
    - Right ramp
    - Right orbit
  - Treehouse of Horror awards given in the following order:
    - 10x Nuclear Plant
    - Nuclear Disaster
    - Apu's Giveaway
    - Krusty's Nightmare
    - Max Everything
    - Captain's Bounty
    - Crazy Extra Ball
    - Big Points
  - Kwik-E-Mart increased by 1,110 then 2,220, then 3,330, etc.
  - Digits in Krusty's Nightmare awarded in order 1-9.
  - Hold-value awards given in the following order:
    - Pop value
    - Nuclear value
    - Right ramp value
    - Left ramp value
    - Kwik-E-Mart value
    - Drop target value
    - Chalkboard value
    - Bonus value
    - Bonus multiplier
  - Max-value awards given in the following order:
    - Pop value
    - Nuclear value
    - Right ramp value
    - Left ramp value
    - Kwik-E-Mart value
    - Drop target value
    - Chalkboard value
  - Mystery awards are given according to the following logic:
    - If any timed mode is running, then...
      - If TV is unlit, light TV
      - If < 10 seconds remain on timer, then add 15 seconds
      - If Otto is unlit, light Otto
      - If only one Otto mode left, start it
      - If only one TV mode left, start it
      - Otherwise, add 10 seconds (or more to get timer to 25)
    - If a hurryup is running, start another hurryup
    - If no Daredevil mode running or lit, light a Daredevil mode
    - If Cletus kids > 20, award 2 kids
    - If Get Duffed is lit, award 1 duff
    - If no I&S multiball yet, advance I&S (but don't start it)
    - If no couch multiball yet, advance couch (but don't start it)
    - If none of the above can be given, then cycle through the following
      awards in order:
      - big points (500,000)
      - hold award (won't be given on last ball)
      - add 50,000 to bonus
      - little points (50,000)
      - add 3 bonus x
      - max award (won't be given on first ball)

------------------------------------------------------------------------------
Display Release       1.02
Date                  January 17, 2003

Display    4M     Rom 0           $655F    1.02      sppdspf.102
Display    4M     Rom 0           $CFEA    1.02      sppdspa.102



Changes from Display v1.01
--------------------------
- fixed diagnostic menu text that was in the wrong order


------------------------------------------------------------------------------
Sound Release         1.01

Sound      512k   U7              $A7EE    1.01      spp101.u7

Changes from sound ROM v1.00
----------------------------
- Rebalanced voice calls vs. bg music.

------------------------------------------------------------------------------
CPU Release	1.03
Date		January 14, 2003

Game ROM   1M     U210            $11FF    1.03      spp-cpu.103

Changes from Game ROM v1.02
---------------------------
- More tweaking of firing times on upper right eject and VUK.
- Consolation extra ball added.
- Mystery percentages tweaked significantly.
- changed post settings for U.K. tournament enabled games

------------------------------------------------------------------------------
Display Release       1.01
Date                  January 15, 2003

Display    4M     Rom 0           $59B6    1.01      sppdspf.101
Display    4M     Rom 0           $C2D2    1.01      sppdspa.101



Changes from Display v1.00
--------------------------
- added french translations
- added/fixed german words (some tournament related) 


------------------------------------------------------------------------------
CPU Release	1.02
Date		January 10, 2003

Game ROM   1M     U210            $70FF    1.02      spp-cpu.102

Changes from Game ROM v1.01
---------------------------
- Potential error on TV effect requests trapped.
- Learning table for VUK altered.

------------------------------------------------------------------------------
CPU Release	1.01
Date		January 9, 2003

Game ROM   1M     U210            $81FF    1.01      spp-cpu.101

Changes from Game ROM v1.00
---------------------------
- Some adjustment ranges corrected particularly for token settings.
- VUK to upper playfield now on learning firing table.

------------------------------------------------------------------------------
CPU Release       1.00
Date                  January 8, 2003

CPU ROM
spp-cpu.100 checksum $3CFF

------------------------------------------------------------------------------
Display Release       1.00
Date                  January 8, 2003

Display ROM
sppdspa.100 checksum $4633
sppdspg.100 checksum $3A1D

------------------------------------------------------------------------------
Sound Release         1.00

Sound      512k   U7              $A734    1.00      spp100.u7
Voice 1    8M     U17             $9719    1.00      spp100.u17
Voice 2    8M     U21             $16ED    1.00      spp100.u21
Voice 3    8M     U36             $ADCE    1.00      spp100.u36
Voice 4    8M     U37             $E7E5    1.00      spp100.u37



