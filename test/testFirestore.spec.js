import MockFirebase from 'mock-cloud-firestore';

import { deletePost, savePost, onGetPost, updatePost } from '../src/moduloAuthentication/firebase';

const fixtureData = {
    __collection__: {
        publicaiones: {
            __doc__: {
                abc123: {
                    description: 'Mensaje 1',
                    email: 'giplo1995@hotmail.com',
                    likes: '[idnumero1, idnumero2]',
                    timestamp: '2 de junio de 2021, 09:24:04',
                    userId: 'BRHoEoWqWqY1ukCUptqFgD5dVR22',


                },
                abc456: {
                    description: 'Mensaje 2',
                    email: 'mariana2005@gmail.com',
                    likes: '[idnumero1, idnumero2]',
                    timestamp: '4 de junio de 2021, 079:34:23',
                    userId: 'Nd1UM0HlPnMjtZCRbdcFr6e8AYi2',
                }
            }
        }
    }
};


global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
global.db = firebase.firestore();

describe('guardarPosts', () => {
    it('Deberia poder postear', (done) => {
      const agregar = savePost('Mensaje 1', 'giplo1995@hotmail.com', '[idnumero1, idnumero2]', '2 de junio de 2021, 09:24:04', 'BRHoEoWqWqY1ukCUptqFgD5dVR22');
      return agregar.then(() => {
        onGetPost((data) => {
          const result = data._data.find(publicaciones => publicaciones._data.description=== 'Mensaje 1');
          expect(result._data.description).toBe('Mensaje 1');
          done();
        });
      });
    });
});
