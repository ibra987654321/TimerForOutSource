import { useincrementTime } from "@/use/useIncrement";

export function usetoggleTimer(running, interval, second, minute, hour) {
  if (running) {
    clearInterval(interval);
  } else {
    interval = setInterval(this.incrementTime, 1000);
  }
  running = !running

  useincrementTime(second, minute, hour)
}
