import type { LucideIcon } from "lucide-react";

export type ResultType = {
    title: string;
    description: string;
    score: number;
    passScore: number;
    color: string;
    icon: LucideIcon;
    mistakes?: Array<{
        time: number;
        expected: string;
        actual: string;
    }>;
    recommendations: string[];
}