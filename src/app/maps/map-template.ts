export class GameMode {
    type: string;
    icon: string;
    description: string;
}

export class Type {
    type: string;
    icon: string;
}

export class Map {
    id: string;
    name: string;
    image: string;
    location: string;
    locationIcon: string;
    description: string;
    types: Array<Type>;
}