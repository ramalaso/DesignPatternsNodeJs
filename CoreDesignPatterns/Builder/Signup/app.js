// const Signup = require('./Signup');

// Signup.create('John Doe', 'ramalaso@gmail.com', 25, 'ramalaso.jpg', 'ramalaso', ['Javascript', 'Node js'], ['Node js'], true, false);

const SignupBuilder = require('./SignupBuilder');

new SignupBuilder('Raul Laredo', 'ramalaso@gmail.com', 42)
    .setPhoto('ramalaso.jpg')
    .setNick('ramalaso')
    .setTopics(['Node js', 'Javacsript'])
    .setSME(['Node js'])
    .setModerator()
    .setAdmin()
    .create();