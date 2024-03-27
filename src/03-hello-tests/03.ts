import { StudentType } from '../02-hello-tests /02';

export const sum = (a: number, b: number) => {
	return a + b;
};

export const sum2 = (a: number, b: number) => {
	return a + b;
};
export const addSkill = (st: StudentType, skill: string) => {
	st.technologies.push({
		id: new Date().getTime(),
		title: skill,
	});
};
export const addSkill2 = (st: StudentType, skill: string) => {
	st.technologies.push({
		id: new Date().getTime(),
		title: skill,
	});
};

export function makeSdudentActive(s: StudentType) {
	s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
	return s.address.city.title === cityName;
};
