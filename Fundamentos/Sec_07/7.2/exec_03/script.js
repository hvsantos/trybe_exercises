const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 
const addKeyToObject = (object, newKey, newValue) => {
  object[newKey] = newValue;
  return object
};

console.log(addKeyToObject(lesson2, 'turno', 'noite'));

// 
const listObjectKeys = (object) => Object.keys(object);
console.log(listObjectKeys(lesson2));

// 
const objectLength = (object) => listObjectKeys(object).length;

console.log(objectLength(lesson2));

//
const objectValues = (object) => Object.values(object);

console.log(objectValues(lesson2));

//
const sumLessons = (lesson1, lesson2, lesson3) => {
  let new1 = { lesson1: lesson1 };
  let new2 = { lesson2: lesson2 };
  let new3 = { lesson3: lesson3 };
  let newObject = Object.assign({}, new1, new2, new3);
  return newObject;
};

const allLessons = sumLessons(lesson1, lesson2, lesson3);

console.log(allLessons);

//
const totalStudents = (allLessons) => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;

console.log(totalStudents(allLessons));

//
const getValueByNumber = (lesson, position) => {
  let object = Object.values(lesson)
  return object[position]
}

console.log(getValueByNumber(lesson1, 0));

//
const verifyPair = (lesson, keyName, keyValue) => {
  let lessonKey = Object.keys(lesson);
  let lessonValue = Object.values(lesson);
  for (let i = 0; i < lessonKey.length; i += 1) {
    if (lessonKey[i] === keyName && lessonValue[i] === keyValue) {
      return true;
    }
  }
  return false;
}

console.log(verifyPair(lesson3, 'materia', 'Matemática'));

//
const checkStudentsPerClass = (allLessons, inputClass) => {
  const allLNames = ['lesson1', 'lesson2', 'lesson3'];
  let sumStudents = 0;
  for (let i = 0; i < 3; i += 1) {
    const loopLesson = allLessons[allLNames[i]]
    if (loopLesson.materia === inputClass) {
      sumStudents += loopLesson.numeroEstudantes;
    }
  }
  return `Alunos nessa materia: ${sumStudents}`;
};

console.log(checkStudentsPerClass(allLessons, 'Matemática'))

//
const createReport = (lesson, teacher) => {
  const allLNames = ['lesson1', 'lesson2', 'lesson3'];
  let sumStudents = 0;
  let allClasses = [];
  for (let i = 0; i < 3; i += 1){
    if (lesson[allLNames[i]].professor === teacher){
      allClasses.push(lesson[allLNames[i]].materia);
      sumStudents += lesson[allLNames[i]].numeroEstudantes;
    }
  }
  const result = {
    professor: teacher,
    aulas: allClasses,
    estudantes: sumStudents
  }
  return result;
}

console.log(createReport(allLessons, 'Maria Clara'));