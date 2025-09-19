import { CheckCircle2, Clock, Music, Repeat, Smile, Users, Volume2 } from "lucide-react";
import type { ResultType } from "@/types/result";

export const analysisData: ResultType[] = [
  {
    title: "Note Accuracy",
    description: "Evaluation of correct notes played.",
    score: 45,
    icon: Music,
    passScore: 50,
    color: "bg-red-500",
    mistakes: [
      { time: 12.5, expected: "C4", actual: "D4" },
      { time: 45.0, expected: "E4", actual: "E3" },
      { time: 78.2, expected: "G4", actual: "F4" },
    ],
    recommendations: [
      "Practice scales to improve note accuracy.",
      "Use a tuner to ensure correct pitch.",
      "Slow down difficult passages to focus on accuracy.",
    ],
  },
  {
    title: "Rhythm & Tempo",
    description: "Assessment of rhythm and tempo consistency.",
    score: 80,
    icon: Clock,
    passScore: 60,
    color: "bg-yellow-500",
    mistakes: [
      { time: 22.1, expected: "Quarter note", actual: "Eighth note" },
      { time: 54.3, expected: "Steady tempo", actual: "Rushed" },
    ],
    recommendations: [
      "Practice with a metronome to maintain steady tempo.",
      "Clap rhythms before playing.",
      "Record yourself to check for tempo fluctuations.",
    ],
  },
  {
    title: "Note Duration",
    description: "Analysis of note lengths and timing.",
    score: 70,
    icon: Volume2,
    passScore: 55,
    color: "bg-orange-500",
    mistakes: [
      { time: 30.0, expected: "Half note", actual: "Quarter note" },
      { time: 65.7, expected: "Dotted quarter", actual: "Quarter" },
    ],
    recommendations: [
      "Count out loud while playing.",
      "Use a metronome to check note durations.",
      "Practice holding notes for their full value.",
    ],
  },
  {
    title: "Expression",
    description: "Judgment of musical expression",
    score: 55,
    icon: Smile,
    passScore: 70,
    color: "bg-green-500",
    mistakes: [{ time: 40.2, expected: "Crescendo", actual: "No change" }],
    recommendations: [
      "Experiment with dynamics and phrasing.",
      "Listen to professional recordings for inspiration.",
      "Mark expressive elements in your score.",
    ],
  },
  {
    title: "Timing & Synchronization",
    description: "Assessment of timing and synchronization with the teacher.",
    score: 78,
    icon: Users,
    passScore: 65,
    color: "bg-blue-500",
    mistakes: [
      { time: 15.0, expected: "Play together", actual: "Lagged" },
      { time: 70.5, expected: "In sync", actual: "Ahead" },
    ],
    recommendations: [
      "Practice with duet recordings.",
      "Focus on listening to the other part.",
      "Use a metronome for joint practice.",
    ],
  },
  {
    title: "Dynamics",
    description: "Evaluation of dynamic control and expression.",
    score: 82,
    icon: Repeat,
    passScore: 68,
    color: "bg-purple-500",
    mistakes: [{ time: 33.3, expected: "Forte", actual: "Mezzo forte" }],
    recommendations: [
      "Practice playing at different dynamic levels.",
      "Mark dynamics clearly in your music.",
      "Record and listen for dynamic contrast.",
    ],
  },
  {
    title: "Consistency",
    description: "Evaluation of consistency in performance.",
    score: 40,
    icon: CheckCircle2,
    passScore: 60,
    color: "bg-teal-500",
    mistakes: [
      { time: 10.0, expected: "Consistent articulation", actual: "Varied" },
    ],
    recommendations: [
      "Focus on repeating passages with the same technique.",
      "Identify and address inconsistent sections.",
      "Practice slowly to build consistency.",
    ],
  },
];
