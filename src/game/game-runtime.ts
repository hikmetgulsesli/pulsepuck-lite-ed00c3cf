export type PulsePuckLiteDifficulty = 'easy' | 'normal' | 'hard';

export interface PulsePuckLiteRuntimeEntity {
  lane: number;
  position: number;
}

export interface PulsePuckLiteRuntime {
  player: PulsePuckLiteRuntimeEntity;
  obstacles: PulsePuckLiteRuntimeEntity[];
  shards: PulsePuckLiteRuntimeEntity[];
  score: number;
  energy: number;
  lives: number;
  paused: boolean;
}

export interface PulsePuckLiteRuntimeOptions {
  difficulty: PulsePuckLiteDifficulty;
  score?: number;
  paused?: boolean;
}

const difficultySpeed: Record<PulsePuckLiteDifficulty, number> = {
  easy: 8,
  normal: 12,
  hard: 16,
};

export function createPulsePuckLiteRuntime({
  difficulty,
  score = 0,
  paused = true,
}: PulsePuckLiteRuntimeOptions): PulsePuckLiteRuntime {
  const speed = difficultySpeed[difficulty];

  return {
    player: { lane: 1, position: 8 },
    obstacles: [
      { lane: 0, position: Math.max(1, 7 - Math.floor(speed / 8)) },
      { lane: 2, position: Math.max(2, 10 - Math.floor(speed / 10)) },
    ],
    shards: [
      { lane: 1, position: 3 },
      { lane: 2, position: 6 },
    ],
    score,
    energy: Math.max(30, 100 - speed),
    lives: difficulty === 'hard' ? 2 : 3,
    paused,
  };
}

export function advancePulsePuckLiteRuntime(
  runtime: PulsePuckLiteRuntime,
  difficulty: PulsePuckLiteDifficulty,
): PulsePuckLiteRuntime {
  if (runtime.paused || runtime.lives <= 0) {
    return runtime;
  }

  const speed = difficultySpeed[difficulty];
  const score = runtime.score + Math.round(speed / 2);
  const energy = Math.max(0, runtime.energy - (difficulty === 'hard' ? 3 : 2));
  const lives = energy === 0 ? Math.max(0, runtime.lives - 1) : runtime.lives;

  return {
    ...runtime,
    score,
    energy: energy === 0 && lives > 0 ? 100 : energy,
    lives,
    paused: lives === 0,
    obstacles: runtime.obstacles.map((obstacle, index) => ({
      lane: (obstacle.lane + index + 1) % 3,
      position: obstacle.position <= 0 ? 10 : obstacle.position - 1,
    })),
    shards: runtime.shards.map((shard, index) => ({
      lane: (shard.lane + index) % 3,
      position: shard.position <= 0 ? 9 : shard.position - 1,
    })),
  };
}
