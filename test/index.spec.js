// importamos la funcion que vamos a testear
import {login, registerUser, loginGoogle} from '../src/lib/index';

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mocksdk = new firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
);
mockauth.autoFlush();
global.firebase = mocksdk;

describe('ingresa a iniciar sesion', () => {
  it('ingresar un usuario', () => {
    return login('mariana2005@gmail.com', 'contraseña').then((user) => {
      expect(user.email).toBe('mariana2005@gmail.com');
    });
  });
});

describe('crear un usuario', () => {
  it('crear un usuario', () => {
    return registerUser('gimeve@gmail.com', 'contraseña').then((user) => {
      expect(user.email).toBe('gimeve@gmail.com');
    });
  });
});

// describe('cerrar sesión', () => {
//   it('cerrar sesión', () => {
//     return cerrarSesion().then((user) => {
//       expect(user).toBe(undefined);
//     });
//   });
// });
describe('login Google', () => {
  test('debería ser una función', () => {
    expect(typeof loginGoogle).toBe('function');
  });
});

describe("ingresar con google", () => {
  it("ingresar con usuario de google", () => {
    loginGoogle().then((credential) => {
      // console.log(credential);
      expect(credential).toBe("signIn");
    });
  });
});


