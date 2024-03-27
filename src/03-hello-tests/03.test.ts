import { StudentType } from '../02-hello-tests /02';
import { addSkill, doesStudentLiveIn, makeSdudentActive } from './03';

let student: StudentType;
beforeEach(() => {
	student = {
		name: 'Adam',
		age: 38,
		isActive: false,
		address: {
			streetTitle: 'Surganova 2',
			city: {
				title: 'Minsk',
				countryTitle: 'Belarus',
			},
		},
		technologies: [
			{ id: 1, title: 'HTML' },
			{ id: 2, title: 'CSS' },
			{ id: 3, title: 'React' },
		],
	};
});

test('new tech skill should be added to student', () => {
	expect(student.technologies.length).toBe(3);
	addSkill(student, 'JS');

	expect(student.technologies.length).toBe(4);
	expect(student.technologies[3].title).toBe('JS');
	expect(student.technologies[3].id).toBeDefined();
});
test('student should be made active', () => {
	expect(student.isActive).toBe(false);
	makeSdudentActive(student);

	expect(student.isActive).toBe(true);
});
test('student livesnin city?', () => {
	expect(student.isActive).toBe(false);
	makeSdudentActive(student);

	expect(student.isActive).toBe(true);
});

test('does student live in city?', () => {
	let result1 = doesStudentLiveIn(student, 'Moskow');
	let result2 = doesStudentLiveIn(student, 'Minsk');

	expect(result1).toBe(false);
	expect(result2).toBe(true);
});
