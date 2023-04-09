import { Cartas, Cartas_constructor, Cartas_Mazo_BD } from "src/app/cartas/interfaces/carta.interface";

export interface Mazos_ringsdb {
    id:              string;
    name:            string;
    date_creation:   Date;
    date_update:     Date;
    description_md:  string;
    user_id:         string;
    //heroes:          [{id: Cartas_constructor, cantidad: number}];
    heroes:          [{id: string, cantidad: number}];
    slots:           [{id: string, cantidad: number}];
    sideslots:       any[];
    version:         string;
    last_pack:       string;
    freeze_comments: null;
    is_published:    boolean;
    nb_votes:        number;
    nb_favorites:    number;
    nb_comments:     number;
    starting_threat: number;
}

export interface Mazo_BD {
    _id:             string;
    name:            string;
    date_creation:   Date;
    date_update:     Date;
    description_md:  string;
    user_id:         string;
    heroes:          Cartas_Mazo_BD[];
    slots:           Cartas_Mazo_BD[];
    sideslots:       Cartas_Mazo_BD[];
    version:         string;
    last_pack:       string;
    freeze_comments: null;
    is_published:    boolean;
    nb_votes:        number;
    nb_favorites:    number;
    nb_comments:     number;
    starting_threat: number;
}

export interface Mazos {
    _id:             string;
    name:            string;
    date_creation:   Date;
    date_update:     Date;
    description_md:  string;
    user_id:         string;
    heroes:          Cartas_constructor[];
    slots:           Cartas_constructor[];
    sideslots:       any[];
    version:         string;
    last_pack:       string;
    freeze_comments: null;
    is_published:    boolean;
    nb_votes:        number;
    nb_favorites:    number;
    nb_comments:     number;
    starting_threat: number;
}