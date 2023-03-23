export interface Cartas {
    pack_code:   string;
    pack_name:   string;
    type_code:   TypeCode;
    type_name:   TypeName;
    sphere_code: SphereCode;
    sphere_name: SphereName;
    position:    string;
    code:        string;
    name:        string;
    traits:      string;
    text:        string;
    flavor:      string;
    is_unique:   string;
    threat:      number;
    willpower:   string;
    attack:      string;
    defense:     string;
    health:      string;
    quantity:    string;
    deck_limit:  string;
    illustrator: string;
    octgnid:     string;
    has_errata:  string;
    url:         string;
    imagesrc:    string;
    cost:        string;
    victory:     string;
    quest:       string;
}

export interface Cartas_Mazo_BD{
    _id:    string;
    code:   string;
    copias: number;
}

export interface Cartas_constructor {
    pack_code:   string;
    pack_name:   string;
    type_code:   TypeCode;
    type_name:   TypeName;
    sphere_code: SphereCode;
    sphere_name: SphereName;
    position:    string;
    code:        string;
    name:        string;
    traits:      string;
    text:        string;
    flavor:      string;
    is_unique:   string;
    threat:      number;
    willpower:   string;
    attack?:      string;
    defense:     string;
    health:      string;
    quantity:    string;
    deck_limit:  string;
    illustrator: string;
    octgnid:     string;
    has_errata:  string;
    url:         string;
    imagesrc:    string;
    cost:        string;
    victory:     string;
    quest:       string;
    copias:      number;
}

export enum SphereCode {
    Baggins = "baggins",
    Fellowship = "fellowship",
    Leadership = "leadership",
    Lore = "lore",
    Neutral = "neutral",
    Spirit = "spirit",
    Tactics = "tactics",
}

export enum SphereName {
    Baggins = "Baggins",
    Fellowship = "Fellowship",
    Liderazgo = "Liderazgo",
    Lore = "Lore",
    Neutral = "Neutral",
    Spirit = "Spirit",
    Tactics = "Tactics",
}

export enum TypeCode {
    Ally = "ally",
    Attachment = "attachment",
    Contract = "contract",
    Event = "event",
    Hero = "hero",
    PlayerSideQuest = "player-side-quest",
    Treasure = "treasure",
}

export enum TypeName {
    Ally = "Ally",
    Attachment = "Attachment",
    Campaign = "Campaign",
    Contract = "Contract",
    Event = "Event",
    Hero = "Hero",
    PlayerSideQuest = "Player Side Quest",
}
