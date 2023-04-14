import {
	GRASS,
	POISON,
	FIRE,
	WATER,
	ICE,
	LIGHTNING,
	ELECTRIC,
	PSYCHIC,
	FAIRY,
	GHOST,
	FIGHTING,
	ROCK,
	GROUND,
	DARK,
	METAL,
	STEEL,
	DRAGON,
	NORMAL,
	FLYING,
	UNKNOWN,
	BUG,
} from "./constants";

export default function colorDecider(PokeType: string): string {
	switch (PokeType) {
		case GRASS:
			return GRASS;
		case POISON:
			return POISON;
		case BUG:
			return BUG;
		case FIRE:
			return FIRE;
		case WATER:
			return WATER;
		case ICE:
			return ICE;
		case LIGHTNING:
			return LIGHTNING;
		case ELECTRIC:
			return ELECTRIC;
		case PSYCHIC:
			return PSYCHIC;
		case FAIRY:
			return FAIRY;
		case GHOST:
			return GHOST;
		case FIGHTING:
			return FIGHTING;
		case ROCK:
			return ROCK;
		case GROUND:
			return GROUND;
		case DARK:
			return DARK;
		case METAL:
			return METAL;
		case STEEL:
			return STEEL;
		case DRAGON:
			return DRAGON;
		case NORMAL:
			return NORMAL;
		case FLYING:
			return FLYING;
		default:
			return UNKNOWN;
	}
}
