import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

crons.daily(
  "delete old quizzes",
  { hourUTC: 0, minuteUTC: 0 },
  internal.quizzes.deleteOldQuizzes
);

export default crons;
