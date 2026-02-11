
export interface TableData {
  columns: string[];
  rows: string[][];
}

export interface Question {
  id: string;
  type: string;
  prompt: string;
  options?: string[];
  table?: TableData;
  pairs?: [string, string][];
}

export interface Day {
  day: string;
  teaching_point: string;
  questions: Question[];
  answers: Record<string, any>;
}

export interface Week {
  week: number;
  focus: string;
  days: Day[];
}

export interface Curriculum {
  title: string;
  audience: string;
  structure: {
    weeks: number;
    days_per_week: number;
    daily_duration_minutes: number;
  };
  weeks: Week[];
}
