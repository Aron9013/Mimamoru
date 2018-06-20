export class Skill {
    name: string;
    description: string;
    icon: string;
    type: string;
}

export class Biography {
    realName: string;
    age: string;
    occupation: string;
    baseOfOperations: string;
    affiliation: string;
}

export class Overview {
    role: string;
    roleIcon: string;
    characterImage: string;
    skills: Array<Skill>;
    difficulty: number;
    description: string;
}

export class Story {
    biography: Biography;
    quote: string;
    backStory: string;
}

export class Character {
    id: string;
    name: string;
    portraitImage: string;
    overview: Overview;
    story: Story;
}
