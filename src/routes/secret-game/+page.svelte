<script lang="ts">
  import "../../app.css";

  enum GameState {
    LOBBY,
    PLAYING,
    GAME_OVER
  }

  let codingChallenges = [
    "const greeting = 'Hello, world!';",
    "function factorial(n) { /* code here */ }"
  ];

  let currentChallengeIndex = 0;
  let currentChallenge = codingChallenges[currentChallengeIndex];
  let userInput = "";
  let gameState = GameState.LOBBY;

  function checkInput() {
    if (userInput === currentChallenge) {
      nextChallenge();
    }
  }

  function nextChallenge() {
    currentChallengeIndex++;
    if (currentChallengeIndex < codingChallenges.length) {
      currentChallenge = codingChallenges[currentChallengeIndex];
      userInput = "";
    } else {
      // TODO: Game Over Logic
    }
  }
</script>

<main class="min-h-screen flex flex-col justify-center items-center gap-5">
  <h1 class="font-koulen text-4xl">CodeTyper: Developer's Challenge</h1>
  <div class="text-center">
    <p class="italic">Type the following code:</p>
    <code>
      {#each currentChallenge.split("") as char, i}
      <span
        class:incorrect={i < userInput.length && userInput[i] !== char}
        class:correct={i < userInput.length && userInput[i] === char}
      >{char}</span>
      {/each}
    </code>
  </div>
  <input
    type="text"
    bind:value={userInput}
    on:input={() => checkInput()}
    class="font-fira bg-neutral-850 p-3 rounded-md focus:outline-none"
  />
</main>

<style>
    .incorrect {
        color: theme('colors.red.500');
    }

    .correct {
        color: theme('colors.green.500');
    }
</style>