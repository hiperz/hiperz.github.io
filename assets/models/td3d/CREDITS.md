# Model credits — Pixel Defense 3D

Every model here is **CC0 1.0 (public domain)**, from Kenney's
[Tower Defense Kit](https://kenney.nl/assets/tower-defense-kit). CC0 waives all
rights, so no attribution is required — these credits exist because the person
who made the work deserves naming, not because a licence compels it.

One kit rather than the best model out of several: a cannon from one pack beside
a creature from another reads as two games.

| File                  | Used as                   |
| --------------------- | ------------------------- |
| `weapon-ballista.glb` | Arrow Tower               |
| `weapon-cannon.glb`   | Cannon                    |
| `weapon-turret.glb`   | Frost Tower               |
| `tile.glb`            | Grass, every square of it |
| `tile-dirt.glb`       | The road                  |
| `detail-tree.glb`     | Trees on the playfield    |
| `detail-rocks.glb`    | Rocks on the playfield    |

`Textures/colormap.png` is the palette atlas all nine share, and **the folder has
to keep that name**: each `.glb` refers to it by relative path. Sharing it is why
seven models come to 200 kB rather than several megabytes.

Files were copied unchanged. The sky, the clouds, the creatures and the scenery
past the playfield are still built from primitives at runtime, because that costs
nothing to store and git keeps every version of a binary for ever.

The creatures were tried as models twice and kept their primitives both times.
The kit's own enemies are flying saucers, which cannot queue along a footpath
without looking absurd; Kenney's CC0 Blocky Characters do walk, with a real walk
cycle, but at this camera they are human figures a few pixels tall,
indistinguishable from one another, and a hundred kilobytes each. A capsule in
the right colour reads as "the fast one" from across the board, which is the only
job an enemy silhouette has here.

If a model fails to load the game still runs: each one has a hand-built
primitive behind it, which is what the whole scene was before this.
