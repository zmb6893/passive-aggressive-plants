export type Plant = {
	name: string;
	plantType: string;
	moisture: StatRange;
	ph?: StatRange;
	nutrient?: StatRange;
}

export type StatRange = {
	max: number;
	min: number;
	current: number;
}

export enum PlantMoods {
	HAPPY="happy",
	PASSIVEAGGRESSIVE="passive_aggressive"
}