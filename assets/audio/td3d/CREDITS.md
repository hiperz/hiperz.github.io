# Audio credits — Pixel Defense 3D

Every file here is **CC0 1.0 (public domain)**. CC0 waives all rights, so no
attribution is required — these credits exist because the people who made the
work deserve naming, not because a licence compels it.

Kept in the repository rather than fetched from a CDN so the game keeps working
if a host disappears, and so nothing outside this origin is contacted while
somebody plays. Total: **113 kB**, which is the whole reason the selection is
this small — git keeps every version of a binary for ever.

There is no music file here. Both games play the same synthesised track from
`engine/music.ts`: the recorded loop that used to sit in this folder was calm,
which is the wrong thing under a wave of orcs, and every CC0 track with the right
energy was three to four megabytes. Writing one was the only way to have both.

| File          | Source                                                                                       | Author |
| ------------- | -------------------------------------------------------------------------------------------- | ------ |
| `build.ogg`   | [Kenney — Interface Sounds](https://kenney.nl/assets/interface-sounds) — `confirmation_001`  | Kenney |
| `upgrade.ogg` | [Kenney — Interface Sounds](https://kenney.nl/assets/interface-sounds) — `maximize_004`      | Kenney |
| `wave.ogg`    | [Kenney — Interface Sounds](https://kenney.nl/assets/interface-sounds) — `bong_001`          | Kenney |
| `sell.ogg`    | [Kenney — RPG Audio](https://kenney.nl/assets/rpg-audio) — `handleCoins`                     | Kenney |
| `shot.ogg`    | [Kenney — Impact Sounds](https://kenney.nl/assets/impact-sounds) — `impactGeneric_light_002` | Kenney |
| `kill.ogg`    | [Kenney — Impact Sounds](https://kenney.nl/assets/impact-sounds) — `impactSoft_medium_000`   | Kenney |
| `leak.ogg`    | [Kenney — Impact Sounds](https://kenney.nl/assets/impact-sounds) — `impactBell_heavy_001`    | Kenney |
| `boss.ogg`    | [Kenney — Impact Sounds](https://kenney.nl/assets/impact-sounds) — `impactMetal_heavy_003`   | Kenney |
| `over.ogg`    | [Kenney — Music Jingles](https://kenney.nl/assets/music-jingles) — `jingles_NES13`           | Kenney |

Files were copied unchanged. Nothing was re-encoded — there is no ffmpeg in the
build, so anything added here has to already be small enough to ship.
