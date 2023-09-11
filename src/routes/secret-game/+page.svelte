<script lang="ts">
  import "../../app.css";
  import codeblocks from "../../lib/data/codeblocks";

  enum GameState {
    LOBBY,
    PLAYING,
    GAME_OVER
  }

  let currentChallengeIndex = 0;
  let currentChallenge = codeblocks[currentChallengeIndex];
  let userInput = "";
  let gameState = GameState.LOBBY;
  let startTime = 0;
  let endTime = 0;
  let cps = 0;

  function checkInput() {
    if (userInput.startsWith(currentChallenge)) {
      nextChallenge();
    }
  }

  function nextChallenge() {
    currentChallengeIndex++;
    if (currentChallengeIndex < codeblocks.length) {
      currentChallenge = codeblocks[currentChallengeIndex];
      userInput = "";
    } else {
      window.removeEventListener('keydown', keyDownListener)
      gameState = GameState.GAME_OVER;
      endTime = new Date().getTime();
      calculateCPS();
    }
  }

  function calculateCPS() {
    const timeInSeconds = (endTime - startTime) / 1000;
    cps = userInput.length / timeInSeconds;
  }

  function startTimer() {
    startTime = new Date().getTime();
  }

  const keyDownListener = (event: KeyboardEvent): void => {
    if (currentChallengeIndex === 0 && userInput.length === 0) {
      startTimer();
    }

    if (event.key.length === 1) {
      userInput += event.key;
    } else if (event.code === 'Space') {
      userInput += ' ';
    } else if (event.code === 'Backspace') {
      userInput = userInput.slice(0, -1);
    }
    checkInput();
  };
</script>

<main class="min-h-screen grid grid-rows-[min-content_auto] py-10">
    <div class="text-center">
        <h1 class="font-koulen text-4xl">CodeTyper: Developer's Challenge</h1>
        {#if gameState === GameState.LOBBY}
            <p class="text-neutral-300 text-base italic mt-2">
                "CodeTyper" is a game where you simply have to type provided one-line code snippets as fast as possible
            </p>
        {/if}
    </div>
    <div class="flex flex-col justify-center items-center gap-5">
        {#if gameState === GameState.LOBBY}
            <button class="flex items-center text-xl capitalize text-primary-500 border border-primary-500 no-underline gap-1.5 px-8 py-4 rounded-md hover:brightness-110 transition ease-in-out"
                    on:click={() => {
                    gameState = GameState.PLAYING;
                    currentChallengeIndex = 0;
                    currentChallenge = codeblocks[currentChallengeIndex];
                    userInput = "";
                    window.addEventListener('keydown', keyDownListener);
                }}>
                Start game
            </button>
        {:else if gameState === GameState.PLAYING}
            <code class="text-xl">
                {#each currentChallenge.split("") as char, i}
                    <span class:incorrect={i < userInput.length && userInput[i] !== char}
                          class:correct={i < userInput.length && userInput[i] === char}
                          class:cursor={i === userInput.length}
                    >{char}</span>
                {/each}
            </code>
        {:else if gameState === GameState.GAME_OVER}
            <p class="text-3xl font-medium uppercase tracking-wide">Game Over</p>
            <p>avg. CPS: {cps.toFixed(2)}</p>
            <div class="flex gap-2">
                <button class="flex items-center text-sm capitalize text-primary-500 border border-primary-500 no-underline gap-1.5 px-5 py-2 rounded-md hover:brightness-110 transition ease-in-out"
                        on:click={() => {
                        gameState = GameState.PLAYING;
                        currentChallengeIndex = 0;
                        currentChallenge = codeblocks[currentChallengeIndex];
                        userInput = "";
                        window.addEventListener('keydown', keyDownListener);
                }}>
                    Play again
                </button>
                <button class="flex items-center text-sm capitalize text-red-400 border border-red-400 no-underline gap-1.5 px-5 py-2 rounded-md hover:brightness-110 transition ease-in-out"
                        on:click={() => window.location.href = '/'}>
                    Exit game
                </button>
            </div>
        {/if}
    </div>
</main>

<style>
    .incorrect {
        color: theme('colors.red.500');
    }

    .correct {
        color: theme('colors.green.500');
    }

    .cursor {
        background-color: theme('colors.neutral.800');
    }
</style>
