export type TComponent<T = undefined> = T extends undefined ? { (): JSX.Element } : { (props: T): JSX.Element };

/**
 * DistributiveOmit credit goes to jcalz
 *
 * Link the community https://stackoverflow.com/questions/57103834/typescript-omit-a-property-from-all-interfaces-in-a-union-but-keep-the-union-s
 */
export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

export const Assert = <T>(element: T) => element;

export enum Direction {
	"Left",
	"Center",
	"Right",
}

export enum State {
	NONE,
	LOADING,
	SUCCESS,
	FAILURE,
}

export type TImage = {
	imgSrc: string;
	imgAlt: string;
};
