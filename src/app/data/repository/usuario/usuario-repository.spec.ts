import { UsuarioRepository } from './usuario-repository';
import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment';

describe('data: UsuarioRepository', () => {
  let service: UsuarioRepository;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [UsuarioRepository]
    }).compileComponents();

    service = TestBed.get(UsuarioRepository);
    backend = TestBed.get(HttpTestingController);
  });

  it('deve criar uma instancia', () => {
    expect(service).toBeTruthy();
  });

  describe('quando fizer o login', () => {
    it('deve fazer uma solicitação GET', async(() => {
      const user = { name: 'test', password: '123' };

      service.login(user).subscribe(() => {});

      const req = backend.expectOne(environment.serverUrl + '/users?name=' + user.name + '&password=' + user.password + '');
      expect(req.request.method).toBe('GET');

      backend.verify();
    }));

    it('deve retornar um usuario', () => {
      const user = { name: 'test', password: '123' };

      service.login(user).subscribe((item) => {
        if (item) {
          expect(item).toBeTruthy();
        }
      });

      const req = backend.expectOne(environment.serverUrl + '/users?name=' + user.name + '&password=' + user.password + '');

      req.flush([{
        id: 1
      }]);

      backend.verify();
    });

    it('deve retornar null ao executar o metodo login', () => {
      const param = {
        name: 'nome1',
        password: 'senha123'
      };

      service.login(param).subscribe(res => {
        expect(res).toEqual(null);
      });

      const req = backend.expectOne(environment.serverUrl + '/users?name=' + param.name + '&password=' + param.password + '');

      req.flush([null]);
    });
  });

  describe('quando fizer o logout', () => {
    it('deve deslogar o usuario', () => {
      expect(service.logout()).toBeTruthy();
    });
  });
});
