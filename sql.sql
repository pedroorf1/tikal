CREATE TABLE alunos(
  id serial primary key,
  nome varchar not null
);

CREATE TABLE notas(
  id serial primary key,
  idAluno bigint,
  nota1 decimal(2,2),
  nota2 decimal(2,2),
  nota3 decimal(2,2),
  nota4 decimal(2,2),
  foreign key (idAluno) references alunos(id)
)

INSERT INTO alunos values(DEFAULT,'Carlos Andre');
INSERT INTO alunos values(DEFAULT,'Valéria Costa');
INSERT INTO alunos values(DEFAULT,'Thiago Andrade');
INSERT INTO alunos values(DEFAULT,'Andréia Sousa');
INSERT INTO alunos values(DEFAULT,'Lorena Ribeiro');
INSERT INTO alunos values(DEFAULT,'William Santos');
INSERT INTO alunos values(DEFAULT,'Fernando Ribeiro');
INSERT INTO alunos values(DEFAULT,'Marcos Sousa');
INSERT INTO alunos values(DEFAULT,'Lucas Ribeiro');


SELECT * FROM alunos;
