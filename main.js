let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudiante de ingeniería en computación con interés en la seguridad informática')
  .pauseFor(200)
  .deleteChars(10)
  .start();