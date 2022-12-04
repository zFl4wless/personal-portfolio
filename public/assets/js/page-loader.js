$(document).ready(function () {
  if (sessionStorage.getItem("page-loader") == "false") {
    $(".loader").hide();
    return;
  }
  sessionStorage.setItem("page-loader", "false");

  new Typed(".terminal__cmd", {
    strings: ["systemctl start personal-portfolio"],
    typeSpeed: 20,
    showCursor: false,
    onComplete: () => {
      let count = 1;
      $(".terminal__response--progress-bar").text(
        "[---------------------] 0% | 0/200"
      );
      const interval = setRandomInterval(
        () => {
          $(".terminal__response--progress-bar").text(
            formatProgressBarCode(count)
          );

          if (count == 20) {
            interval.clear();
            $(".terminal__response--progress-bar").text(
              "[===================] 100% | 200/200"
            );
            $(".terminal__response--result").text("Done");
            setTimeout(function () {
              $(".loader").fadeOut(250);
            }, 1000);
          }
          count++;
        },
        50,
        350
      );
    },
  });
});

/**
 * Formats the progress bar code text.
 *
 * @param count The current count of the progress bar interval.
 * @returns The formatted progress bar code text.
 */
const formatProgressBarCode = (count) => {
  const progressDone = "=".repeat(count);
  const progressLeft = count !== 20 ? "-".repeat(20 - count) : "";
  const progressPercent = count * 5;
  const randomPortion = randomNumber(count * 10 - 10, count * 10);

  return `[${progressDone}${progressLeft}] ${progressPercent}% | ${randomPortion}/200`;
};

/**
 * Utility Function for calculating a random number.
 *
 * @param min The minimum number.
 * @param max The maximum number.
 * @returns The random number.
 */
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Utility Function for creating an interval with a random delay.
 *
 * @param intervalFunction The execution function.
 * @param minDelay The minimum delay in milliseconds.
 * @param maxDelay The maximum delay in milliseconds.
 */
const setRandomInterval = (intervalFunction, minDelay, maxDelay) => {
  let timeout;

  const runInterval = () => {
    const timeoutFunction = () => {
      intervalFunction();
      runInterval();
    };

    const delay =
      Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

    timeout = setTimeout(timeoutFunction, delay);
  };

  runInterval();

  return {
    clear() {
      clearTimeout(timeout);
    },
  };
};
