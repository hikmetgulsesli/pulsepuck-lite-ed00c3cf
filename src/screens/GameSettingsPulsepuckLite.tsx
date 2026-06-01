// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - PulsePuck Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Gauge, Keyboard, Pause, Settings, SlidersHorizontal, Volume2 } from "lucide-react";


export type GameSettingsPulsepuckLiteActionId = "settings-1" | "pause-2" | "on-3" | "off-4" | "on-5" | "off-6" | "easy-7" | "normal-8" | "hard-9" | "return-to-gameplay-10" | "save-preferences-11";

export interface GameSettingsPulsepuckLiteProps {
  actions?: Partial<Record<GameSettingsPulsepuckLiteActionId, () => void>>;

}

export function GameSettingsPulsepuckLite({ actions }: GameSettingsPulsepuckLiteProps) {
  return (
    <>
      {/* Blurred Gameplay Background Overlay */}
      <div className="fixed inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center" data-alt="A high-contrast, neon-lit digital arena resembling a futuristic arcade game space. Glowing cyan and magenta geometry streaks across a deep abyss-like background. The visual style is retro-futuristic with intense light emission, simulating a high-speed gaming environment caught mid-action. The lighting is dark mode optimized with vibrant luminescent accents."></div>
      <div className="fixed inset-0 z-0 bg-surface/70 backdrop-blur-2xl"></div>
      {/* TopNavBar (Shared Component Anchor) */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-compact py-unit max-w-full bg-surface/10 backdrop-blur-3xl border-b border-primary/20 shadow-[0_0_15px_rgba(47,217,244,0.3)]">
      <div className="font-headline-sm text-headline-sm font-bold text-primary italic tracking-tighter uppercase">
                  PULSEPUCK LITE
              </div>
      <div className="flex gap-4 items-center">
      {/* Active Settings Icon */}
      <button aria-label="Settings" className="active:scale-95 transition-transform hover:bg-primary/10 transition-colors duration-200 p-2 rounded-full flex items-center justify-center text-primary font-bold drop-shadow-[0_0_8px_rgba(47,217,244,0.8)]" type="button" data-action-id="settings-1" onClick={actions?.["settings-1"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      {/* Inactive Pause Icon */}
      <button aria-label="Pause" className="active:scale-95 transition-transform hover:bg-primary/10 transition-colors duration-200 p-2 rounded-full flex items-center justify-center text-outline hover:text-primary transition-colors" type="button" data-action-id="pause-2" onClick={actions?.["pause-2"]}>
      <Pause aria-hidden={true} focusable="false" />
      </button>
      </div>
      </nav>
      {/* Main Content Canvas: Settings Modal */}
      <main className="relative z-10 flex items-center justify-center min-h-screen pt-20 px-4 pb-10">
      {/* Cyber-Border Modal Container */}
      <div className="relative w-full max-w-3xl bg-surface-container/40 backdrop-blur-3xl border border-primary/30 p-6 md:p-10 shadow-[0_0_40px_rgba(34,211,238,0.1)] flex flex-col gap-8">
      {/* Cyber Corners */}
      <div className="absolute -top-[2px] -left-[2px] w-6 h-6 border-t-2 border-l-2 border-secondary shadow-[0_0_10px_rgba(255,175,211,0.5)]"></div>
      <div className="absolute -top-[2px] -right-[2px] w-6 h-6 border-t-2 border-r-2 border-secondary shadow-[0_0_10px_rgba(255,175,211,0.5)]"></div>
      <div className="absolute -bottom-[2px] -left-[2px] w-6 h-6 border-b-2 border-l-2 border-secondary shadow-[0_0_10px_rgba(255,175,211,0.5)]"></div>
      <div className="absolute -bottom-[2px] -right-[2px] w-6 h-6 border-b-2 border-r-2 border-secondary shadow-[0_0_10px_rgba(255,175,211,0.5)]"></div>
      {/* Header */}
      <header className="flex flex-col gap-1 border-b border-outline/20 pb-4">
      <h1 className="font-headline-md text-headline-md text-primary flex items-center gap-3 uppercase tracking-wide">
      <SlidersHorizontal  style={{fontVariationSettings: "'FILL' 1", fontSize: "32px"}} className="text-secondary" aria-hidden={true} focusable="false" />
                          SYSTEM CONFIG
                      </h1>
      <p className="font-hud-label text-hud-label text-outline uppercase tracking-widest">Override active session parameters</p>
      </header>
      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* Audio Controls Panel */}
      <section className="bg-surface-container-low/50 border border-outline/20 p-panel-padding flex flex-col gap-6 relative group">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <h2 className="font-hud-label text-hud-label text-secondary uppercase tracking-widest flex items-center gap-2">
      <Volume2 className="text-[16px]" aria-hidden={true} focusable="false" /> Audio Output
                          </h2>
      <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
      <span className="font-hud-display text-[16px] text-on-surface-variant uppercase">Master FX</span>
      <div className="flex gap-2">
      <button className="px-4 py-1 border border-primary bg-primary/20 text-primary font-hud-label text-hud-label shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-colors" type="button" data-action-id="on-3" onClick={actions?.["on-3"]}>ON</button>
      <button className="px-4 py-1 border border-outline/30 text-outline font-hud-label text-hud-label hover:border-outline/60 transition-colors" type="button" data-action-id="off-4" onClick={actions?.["off-4"]}>OFF</button>
      </div>
      </div>
      <div className="flex items-center justify-between">
      <span className="font-hud-display text-[16px] text-on-surface-variant uppercase">Synthesizer</span>
      <div className="flex gap-2">
      <button className="px-4 py-1 border border-primary bg-primary/20 text-primary font-hud-label text-hud-label shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-colors" type="button" data-action-id="on-5" onClick={actions?.["on-5"]}>ON</button>
      <button className="px-4 py-1 border border-outline/30 text-outline font-hud-label text-hud-label hover:border-outline/60 transition-colors" type="button" data-action-id="off-6" onClick={actions?.["off-6"]}>OFF</button>
      </div>
      </div>
      </div>
      </section>
      {/* Gameplay Parameters Panel */}
      <section className="bg-surface-container-low/50 border border-outline/20 p-panel-padding flex flex-col gap-6 relative group">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <h2 className="font-hud-label text-hud-label text-secondary uppercase tracking-widest flex items-center gap-2">
      <Gauge className="text-[16px]" aria-hidden={true} focusable="false" /> Parameters
                          </h2>
      <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
      <span className="font-hud-display text-[16px] text-on-surface-variant uppercase">Simulation Difficulty</span>
      <div className="grid grid-cols-3 gap-2">
      <button className="py-2 border border-outline/30 text-outline font-hud-label text-hud-label hover:border-primary/50 transition-colors text-center" type="button" data-action-id="easy-7" onClick={actions?.["easy-7"]}>EASY</button>
      <button className="py-2 border border-secondary bg-secondary/20 text-secondary shadow-[0_0_10px_rgba(255,175,211,0.3)] font-hud-label text-hud-label transition-colors text-center" type="button" data-action-id="normal-8" onClick={actions?.["normal-8"]}>NORMAL</button>
      <button className="py-2 border border-error/50 text-error hover:bg-error/10 font-hud-label text-hud-label transition-colors text-center" type="button" data-action-id="hard-9" onClick={actions?.["hard-9"]}>HARD</button>
      </div>
      </div>
      <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
      <span className="font-hud-display text-[16px] text-on-surface-variant uppercase">Puck Velocity</span>
      <span className="font-hud-label text-primary">1.5x</span>
      </div>
      <input className="w-full mt-2" max="2.5" min="0.5" step="0.1" type="range" defaultValue="1.5" />
      </div>
      </div>
      </section>
      {/* Input Uplink (Full Width) */}
      <section className="md:col-span-2 bg-surface-container-low/50 border border-outline/20 p-panel-padding flex flex-col gap-4 relative group">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <h2 className="font-hud-label text-hud-label text-secondary uppercase tracking-widest flex items-center gap-2">
      <Keyboard className="text-[16px]" aria-hidden={true} focusable="false" /> Input Uplink
                          </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-4">
      {/* WASD Cluster */}
      <div className="flex flex-col items-center gap-2">
      <div className="flex gap-2">
      <div className="w-12 h-12 flex items-center justify-center border border-primary/40 bg-surface text-primary font-hud-display text-hud-display shadow-[inset_0_0_15px_rgba(34,211,238,0.1)] rounded-DEFAULT">W</div>
      </div>
      <div className="flex gap-2">
      <div className="w-12 h-12 flex items-center justify-center border border-primary/40 bg-surface text-primary font-hud-display text-hud-display shadow-[inset_0_0_15px_rgba(34,211,238,0.1)] rounded-DEFAULT">A</div>
      <div className="w-12 h-12 flex items-center justify-center border border-primary/60 bg-primary/10 text-primary font-hud-display text-hud-display shadow-[inset_0_0_20px_rgba(34,211,238,0.3),0_0_10px_rgba(34,211,238,0.2)] rounded-DEFAULT">S</div>
      <div className="w-12 h-12 flex items-center justify-center border border-primary/40 bg-surface text-primary font-hud-display text-hud-display shadow-[inset_0_0_15px_rgba(34,211,238,0.1)] rounded-DEFAULT">D</div>
      </div>
      <span className="font-hud-label text-[10px] text-outline mt-2 tracking-widest uppercase">Movement Core</span>
      </div>
      <div className="hidden md:block w-[1px] h-16 bg-outline/20"></div>
      {/* Arrow Cluster */}
      <div className="flex flex-col items-center gap-2 opacity-70">
      <div className="flex gap-2">
      <div className="w-12 h-12 flex items-center justify-center border border-outline/40 bg-surface text-outline font-hud-display text-hud-display rounded-DEFAULT"><ArrowUp aria-hidden={true} focusable="false" /></div>
      </div>
      <div className="flex gap-2">
      <div className="w-12 h-12 flex items-center justify-center border border-outline/40 bg-surface text-outline font-hud-display text-hud-display rounded-DEFAULT"><ArrowLeft aria-hidden={true} focusable="false" /></div>
      <div className="w-12 h-12 flex items-center justify-center border border-outline/40 bg-surface text-outline font-hud-display text-hud-display rounded-DEFAULT"><ArrowDown aria-hidden={true} focusable="false" /></div>
      <div className="w-12 h-12 flex items-center justify-center border border-outline/40 bg-surface text-outline font-hud-display text-hud-display rounded-DEFAULT"><ArrowRight aria-hidden={true} focusable="false" /></div>
      </div>
      <span className="font-hud-label text-[10px] text-outline mt-2 tracking-widest uppercase">Alt Orientation</span>
      </div>
      </div>
      </section>
      </div>
      {/* Action Footer */}
      <footer className="flex flex-col sm:flex-row justify-end gap-4 mt-2 pt-6 border-t border-primary/20">
      <button className="px-6 py-3 font-hud-label text-hud-label text-outline border border-outline/50 hover:text-secondary hover:border-secondary hover:bg-secondary/5 transition-colors uppercase tracking-widest w-full sm:w-auto" type="button" data-action-id="return-to-gameplay-10" onClick={actions?.["return-to-gameplay-10"]}>
                          RETURN TO GAMEPLAY
                      </button>
      <button className="px-8 py-3 font-hud-label text-hud-label text-on-primary bg-gradient-to-b from-primary to-surface-tint border border-primary shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] hover:brightness-110 active:scale-95 transition-colors uppercase tracking-widest w-full sm:w-auto" type="button" data-action-id="save-preferences-11" onClick={actions?.["save-preferences-11"]}>
                          SAVE PREFERENCES
                      </button>
      </footer>
      </div>
      </main>
    </>
  );
}
