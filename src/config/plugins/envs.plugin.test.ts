import { envs } from './envs.plugin';
import { describe, test, expect, jest } from '@jest/globals';

describe('envs.plugin.ts', () => {



  test('should return env options', ()=> {

    // console.log(envs);

    expect( envs ).toEqual({
      PORT: '3000',
      MAILER_SERVICE: 'gmail',
      MAILER_EMAIL: 'sergio.cerda.lozano@gmail.com',
      MAILER_SECRET_KEY: '****************',
      PROD: false,
      MONGO_URL: 'mongodb://sergio:123456789@localhost:27017',
      MONGO_DB_NAME: 'NOC-TEST',
      MONGO_USER: 'sergio',
      MONGO_PASSWORD: undefined,
      POSTGRES_URL: 'postgresql://postgres:123456789@localhost:5432/NOC',
      POSTGRES_USER: 'postgres',
      POSTGRES_DB: 'NOC-TEST',
      POSTGRES_PASSWORD: '123456789'
    });


  });

  test('should return error if not found env', async() => {
    
    jest.resetModules();
    process.env.PORT = 'ABC';

    try {
      await import('./envs.plugin');
      expect(true).toBe(false);
    } catch (error) {
      console.log(error);
      // expect(`${error}`).toContain('"PORT" should be a valid integer');
    }
    

  })

})