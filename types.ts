export type AgeGroup = 'Kids' | 'Teens';

export interface Lesson {
  id: string;
  title: string;
  ageGroup: AgeGroup;
  description: string;
  duration: string;
  goal: string;
  content: {
    warmUp: string;
    watchListen: {
      description: string;
      youtubeId?: string;
      visuals?: string;
      script?: string;
    };
    learn: {
      description: string;
      points: string[];
    };
    practice: {
      description: string;
      questions: { q: string; a: string }[];
    };
    yourTurn: string;
    quiz: { q: string; options: string[]; correct: number }[];
    relatedGameId: string;
  };
}

export interface Game {
  id: string;
  title: string;
  ageGroup: AgeGroup;
  description: string;
  goal: string;
}
