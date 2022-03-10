### TODOS

## Tests

- Test for popup message

- Test for data recieved from jsonbin

- Test for data sended after game

- Test for next correct Stage loaded

## Tasks

- Better LoadingScreen

- Finish label traduction

- Create all the necesary mixins

- Make description of game

- Check the last labels that need to be created (Disclaimers)

- Clean css

## Bugs

- Loading screen doesnt show when lookat isnt 0 0 0
  To solve add this
  `vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;`
  to the material shader where Loading Screen is

- Bug in the aura for phone devices