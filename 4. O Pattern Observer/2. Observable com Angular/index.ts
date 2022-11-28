/*
getUsers(): Promise<User[]>{
  return fetch(myApiUrl)
  .then(res=>res.json())
  .catch(err=>{
     throw new Error(err.message);  
   });
}
*/

/*
@Injectable()
class UserService {
 getUsers(): Observable<User[]> {
    return this.http.get(myApiUrl)
                    .map(res=>res.json())
                    .catch(err=> Observable.throw(err.message));
 } 
}
*/

import { UserService } from 'user.service';
@Component({
  // Propriedades do componente
})
class UserComponent {
  constructor(private userService: UserService) { }
  private users: User[]; // Lista de usuários
  // Neste método chamamos a função userService.getUsers, que nos 
  // retorna um Observable contendo um array de usuários, então 
  // atribuímos ao this.users
  getUsers() {
    this.userService.getUsers()
      .subscribe(
        users => this.users = users,
        error => console.log(error));
  }
}

// - -

@Injectable()
class downloadFileService {
  downloadFile(attachment: Attachment) {
    this.http
      .get(/* URL de download do arquivo */, { responseType: ResponseContentType.Blob })
      .retry(3) // Aqui especificamos que a quantidade de     
                //tentativas caso o download falhe é 3.
      .map((response: any) => response.blob())
      // Agora temos o arquivo e é só mandar para o usuário :)
  }, (err: any) => /* Tratamos erros aqui :) */);
}

// - -

import { UserService } from 'user.service';
@Component({
  // Propriedades do componente
})
class userComponent {
  constructor(private userService: UserService){}
  private users: User[]; // Nossa lista de usuários
  // Variável que recebe o valor da função handleFilterChange
  private filterString: Subject<string> = new Subject<string>();
  // Função que recebe o valor digitado e coloca em nosso Subject
  handleFilterChange(value: string) {
    this.filterString.next(value);
  }
  // Fazemos um switchMap em nosso Subject filterString e atribuímos   
  // o resultado à nossa lista de usuários 
  ngOnInit() {
    this.users = this.filterString
        .switchMap(value => this.userService.getUsers(value))
        .catch(error => console.log(error)/* Tratamos erros aqui :) */);
  }
}

// - -

import { UserService } from 'user.service';
@Component({
  // Propriedades do componente
})
class userComponent {
  constructor(private userService: UserService){}
  private users: User[]; // Nossa lista de usuários
  // Variável que recebe o valor da função handleFilterChange
  private filterString: Subject<string> = new Subject<string>();
  // Função que recebe o valor digitado e coloca em nosso Subject
  handleFilterChange(value: string) {
    this.filterString.next(value);
  }
  // Fazemos um switchMap em nosso Subject filterString e atribuímos 
  // o resultado à nossa lista de usuários, porém existe um debounceTime de
  // 300 milissegundos para evitar fazer requisições enquanto o usuário ainda 
  // não finalizou a digitação
  ngOnInit() {
    this.users = this.filterString
        .debounceTime(300)
        .switchMap(value => this.userService.getUsers(value))
        .catch(error => console.log(error)/* Tratamos erros aqui :) */);
  }
}
