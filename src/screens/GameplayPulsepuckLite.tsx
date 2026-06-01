// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - PulsePuck Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Pause, Settings } from "lucide-react";


export type GameplayPulsepuckLiteActionId = "pause-game-p-1" | "settings-2" | "start-game-3" | "restart-4" | "resume-5";

export interface GameplayPulsepuckLiteProps {
  actions?: Partial<Record<GameplayPulsepuckLiteActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

const laneToLeft = (lane = 1) => `${16 + Math.max(0, Math.min(2, lane)) * 34}%`;
const positionToTop = (position = 5) => `${Math.max(10, Math.min(86, position * 8))}%`;
const formatScore = (score = 0) => score.toLocaleString("en-US", { minimumIntegerDigits: 6 });

export function GameplayPulsepuckLite({ actions, runtime }: GameplayPulsepuckLiteProps) {
  const score = runtime?.score ?? 0;
  const energy = runtime?.energy ?? 100;
  const lives = runtime?.lives ?? 3;
  const paused = runtime?.paused ?? true;
  const isOpeningState = paused && score === 0;
  const playerLane = runtime?.player?.lane ?? 1;
  const playerPosition = runtime?.player?.position ?? 8;
  const obstacles = runtime?.obstacles ?? [];
  const shards = runtime?.shards ?? [];

  return (
    <>
      {/* TopNavBar (Shared Component) */}
      {/* SUPPRESSED: Screen intent is focused Gameplay. Navbar would obscure canvas. */}
      {/* SideNavBar (Shared Component) */}
      {/* SUPPRESSED: Screen intent is focused Gameplay. */}
      {/* Main Game Canvas Container */}
      <main className="flex-grow flex items-center justify-center relative p-margin-compact">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0"></div>
      {/* HUD: Corner Anchors */}
      <div className="absolute top-margin-compact left-margin-compact z-20 flex gap-gutter">
      <div className="hud-panel px-panel-padding py-2 rounded">
      <p className="font-hud-label text-hud-label text-outline uppercase">SCORE</p>
      <p className="font-hud-display text-hud-display text-primary neon-text-primary">{formatScore(score)}</p>
      </div>
      <div className="hud-panel px-panel-padding py-2 rounded">
      <p className="font-hud-label text-hud-label text-outline uppercase">ENERGY</p>
      <p className="font-hud-display text-hud-display text-secondary neon-text-secondary">{Math.round(energy)}</p>
      </div>
      <div className="hud-panel px-panel-padding py-2 rounded">
      <p className="font-hud-label text-hud-label text-outline uppercase">LIVES</p>
      <p className="font-hud-display text-hud-display text-tertiary neon-text-primary">{lives}</p>
      </div>
      </div>
      <div className="absolute top-margin-compact right-margin-compact z-20 flex gap-gutter">
      <button className="hud-panel px-panel-padding py-2 rounded flex items-center gap-2 hover:bg-white/10 transition-colors" aria-label="Pause Game [P]" title="Pause Game [P]" type="button" data-action-id="pause-game-p-1" onClick={actions?.["pause-game-p-1"]}>
      <Pause className="text-outline" aria-hidden={true} focusable="false" />
      </button>
      <button className="hud-panel px-panel-padding py-2 rounded flex items-center gap-2 hover:bg-white/10 transition-colors" aria-label="Settings" title="Settings" type="button" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <Settings className="text-outline" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Central Playfield */}
      <div className="relative w-full max-w-4xl h-[716px] cyber-bracket bg-surface-container/40 backdrop-blur-md rounded-lg overflow-hidden z-10 shadow-[0_0_50px_rgba(34,211,238,0.1)] flex flex-col justify-end">
      {/* Break-away Targets (Top) */}
      <div className="absolute top-8 w-full px-8 flex justify-center gap-2 flex-wrap">
      <div className="w-16 h-6 bg-secondary/20 neon-border-secondary rounded-sm opacity-100"></div>
      <div className="w-16 h-6 bg-secondary/20 neon-border-secondary rounded-sm opacity-50"></div>
      <div className="w-16 h-6 bg-secondary/20 neon-border-secondary rounded-sm opacity-100"></div>
      <div className="w-16 h-6 bg-secondary/20 neon-border-secondary rounded-sm opacity-100"></div>
      <div className="w-16 h-6 bg-primary/20 neon-border rounded-sm opacity-100"></div>
      <div className="w-16 h-6 bg-primary/20 neon-border rounded-sm opacity-100"></div>
      <div className="w-16 h-6 bg-primary/20 neon-border rounded-sm opacity-50"></div>
      </div>
      {/* Runtime Obstacles */}
      {obstacles.map((obstacle, index) => (
      <div
        className="absolute w-14 h-5 bg-secondary/30 neon-border-secondary rounded-sm shadow-[0_0_18px_rgba(244,114,182,0.45)]"
        key={`obstacle-${index}`}
        style={{ left: laneToLeft(obstacle.lane), top: positionToTop(obstacle.position), transform: "translateX(-50%)" }}
      ></div>
      ))}
      {/* Runtime Energy Shards */}
      {shards.map((shard, index) => (
      <div
        className="absolute w-5 h-5 bg-primary/70 neon-border rounded-full shadow-[0_0_18px_rgba(34,211,238,0.6)]"
        key={`shard-${index}`}
        style={{ left: laneToLeft(shard.lane), top: positionToTop(shard.position), transform: "translateX(-50%)" }}
      ></div>
      ))}
      {/* Glowing Puck */}
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_#22d3ee,0_0_40px_#22d3ee] animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
      {/* Trail effect for puck */}
      <div className="absolute top-[48%] left-[49%] w-3 h-3 bg-primary/40 rounded-full blur-[2px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-[46%] left-[48%] w-2 h-2 bg-primary/20 rounded-full blur-[4px] -translate-x-1/2 -translate-y-1/2"></div>
      {/* Player Paddle (Bottom) */}
      <div
        className="absolute w-32 h-4 bg-tertiary neon-border rounded-full shadow-[0_0_15px_rgba(216,218,255,0.6)] cursor-pointer"
        style={{ left: laneToLeft(playerLane), top: positionToTop(playerPosition), transform: "translateX(-50%)" }}
      ></div>
      </div>
      {/* Start/Restart Controls Overlay (Optional state demonstration) */}
      <div className={`absolute bottom-margin-compact left-1/2 -translate-x-1/2 z-20 flex gap-gutter ${paused ? "" : "hidden"}`}>
      {isOpeningState ? (
      <button className="game-btn px-8 py-3 rounded neon-border text-primary font-hud-label text-hud-label uppercase tracking-widest bg-surface-container/80 backdrop-blur-sm" type="button" data-action-id="start-game-3" onClick={actions?.["start-game-3"]}>
                      START GAME
                  </button>
      ) : null}
      <button className="game-btn game-btn-secondary px-8 py-3 rounded neon-border-secondary text-secondary font-hud-label text-hud-label uppercase tracking-widest bg-surface-container/80 backdrop-blur-sm" type="button" data-action-id="restart-4" onClick={actions?.["restart-4"]}>
                      RESTART
                  </button>
      </div>
      {/* Pause Overlay (Hidden by default, shown here for completeness) */}
      <div className={`absolute inset-0 bg-background/80 backdrop-blur-xl z-50 flex items-center justify-center ${paused && !isOpeningState ? "" : "hidden"}`} id="pauseOverlay">
      <div className="text-center cyber-bracket p-12 bg-surface-container/50">
      <h2 className="font-headline-lg md:font-headline-lg-mobile text-headline-lg md:text-headline-lg-mobile text-primary neon-text-primary mb-4">PAUSED</h2>
      <p className="font-hud-label text-hud-label text-outline mb-8 uppercase tracking-widest">PRESS [P] TO RESUME</p>
      <button className="game-btn px-8 py-3 rounded neon-border text-primary font-hud-label text-hud-label uppercase tracking-widest" type="button" data-action-id="resume-5" onClick={actions?.["resume-5"]}>
                          RESUME
                      </button>
      </div>
      </div>
      </main>
      {/* BottomNavBar (Shared Component) */}
      {/* SUPPRESSED: Screen intent is focused Gameplay. Navbar would obscure canvas. */}
      
    </>
  );
}
