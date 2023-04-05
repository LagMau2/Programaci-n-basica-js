const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const alumnos = [];

rl.question('Ingrese el número de alumnos: ', (numAlumnos) => {
  for (let i = 0; i < numAlumnos; i++) {
    const alumno = {};
    alumno.nombre = '';
    alumno.materias = [];

    rl.question(`Ingrese el nombre del alumno ${i+1}: `, (nombre) => {
      alumno.nombre = nombre;

      rl.question(`Ingrese el número de materias que lleva el alumno ${alumno.nombre}: `, (numMaterias) => {
        for (let j = 0; j < numMaterias; j++) {
          const materia = {};

          rl.question(`Ingrese el nombre de la materia ${j+1} del alumno ${alumno.nombre}: `, (nombreMateria) => {
            materia.nombre = nombreMateria;

            rl.question(`Ingrese la calificación de la materia ${materia.nombre} del alumno ${alumno.nombre}: `, (calificacion) => {
              materia.calificacion = parseFloat(calificacion);
              alumno.materias.push(materia);

              if (alumno.materias.length === numMaterias) {
                alumnos.push(alumno);
                if (alumnos.length === numAlumnos) {
                  console.log('Alumnos y calificaciones:');
                  console.log(alumnos);
                  rl.close();
                }
              }
            });
          });
        }
      });
    });
  }
});
