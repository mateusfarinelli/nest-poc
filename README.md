# Prove of concept - NestJS<br><br>
## O que é NestJS?<br>

Segundo a própria documentação, é um framework node.js progressivo para criar aplicações back-end.
Assim como o "Angular", framework front-end desenvolvido pela Google, o Nest utiliza de uma arquitetura modular, ou seja, trabalha com módulos.<br>

Neste exemplo vemos a criação do modulo "Person" e como ele é trabalhado na forma de um CRUD.<br>

Para mim e para você *(caso seja meu colega de equipe)*, este framework tem como vantagem justamente o que foi descrito acima, por se assemelhar muito com Angular, temos como vantagem o reeaproveitamento de conhecimento adquirido durante o processo de desenvolvimento.<br><br>

## Como executar essa POC<br>
Primeiramente, é preciso que você instalado em sua máquina:
  - [Node.js](https://nodejs.org/en/docs/)
  - [NestJS](https://docs.nestjs.com/)
  - [PostgreSQL](https://www.postgresql.org/docs/) (ou algum outro banco de dados relacional que você tenha dominio, mas lembre-se que será necessário alterar muitas coisas, então sugiro seguir com o Postgres mesmo)
  - [Docker](https://docs.docker.com/) (opcional, mas recomendado)<br>

E também ja me antecipo em dizer que foi utilizado o [TypeORM](https://typeorm.io/), caso você queria conferir a sua documentação.

Caso você não tenha instalado o docker, será necessário seguir o seguinte passo a passo:

- Navegue até o diretório onde você clonou este repositório;
- Execute o comando **npm install** ou **npm i** (para os intimos);
- Execute o comando **npm run typeorm migration:run** (para que a tabela "Persons" seja criado em seu banco de dados);
- E por fim execute o comando npm run start:dev;

Caso você seja brabo (o manjador mesmo), e tenha docker instalado, faça:
- docker compose up -d (esse -d mantem a aba do terminal liberado para uso sem trava-lo com log);

## Endpoints

Como disse, essa POC é extremamente simples e temos os seguintes endpoins:
### **GET**
- **/** - é a raiz da nossa aplicação e ela retorna o famigerado "Hello World";
- **/person** - retorna um array com todos os registros existentes da entidade "Person";
- **/person/:id** - retorna um unico registro com base no id;

### **POST**
- **/person** - endpoint responsável por criar o registro da entidade "Person";

### **PATCH/UPDATE**
- **/person/:id** - endpoint responsável por atualizar o registro referente ao id da entidade "Person";

### **DELETE**
- **/person/:id** - endpoint responsável pela deleção do registro referente ao id da entidade "Person";

## O que esta por vir?
Os proximos passos deste POC são:
 - Adicionar multi tenancy feature, para que a aplicação consiga acessar o banco de acordo com o codigo do cliente;
 - Iniciar o trabalho com environments;
 - Iniciar trabalhos com testes unitários;
 - Iniciar DevOps para facilitar deploy;
## Está com dificuldades ou dúvidas sobre esse material?
- Me chama no zap (só para conhecidos);
- Me manda uma DM no [aqui](https://www.linkedin.com/in/mateusfarinellizardo/)
## Fontes bibliográficas brabas
 - <a>https://github.com/nestjs/nest/tree/master/sample/05-sql-typeorm</a>
 - <a>https://betterprogramming.pub/nest-js-project-with-typeorm-and-postgres-ce6b5afac3be</a>
 - <a>https://espositomarco.medium.com/handle-multi-tenant-multi-db-with-nestjs-and-typeorm-ee50f162485e</a>
 - <a>https://github.com/marcoesposito/nestjs-typeorm-multi-tenant</a>
 - <a>https://www.youtube.com/watch?v=sNosL578ECo</a>
 - <a>https://www.youtube.com/watch?v=wLr23WHZQhA&t=1225s&ab_channel=MatheusCastiglioni</a>

