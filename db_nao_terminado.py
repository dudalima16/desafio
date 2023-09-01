import sqlalchemy
from sqlalchemy.orm import declarative_base 
from sqlalchemy import Column, Integer, String 

engine = sqlalchemy.create_engine('sqlite:///apenasumteste.db', echo=True) # Cria um objeto engine, que é a interface entre o Python e o banco de dados. O primeiro argumento é a URL do banco de dados, que no caso é um arquivo sqlite chamado apenasumteste.db. O segundo argumento é echo=True, que significa que o sqlalchemy vai mostrar os comandos SQL que ele executa no console

Base = declarative_base() # Cria um objeto Base, que é a classe base para todas as classes que representam as tabelas do banco de dados


class DadosCPU(Base): # Define uma classe chamada DadosCPU, que herda da classe Base e representa a tabela usodosistema no banco de dados
    tablename = 'usodosistema' # Define o nome da tabela como usodosistema
    id = Column(Integer, primary_key=True) # Define uma coluna chamada id, que é do tipo inteiro e é a chave primária da tabela
    cpu = Column(String(10)) # Define uma coluna chamada cpu, que é do tipo string e tem tamanho máximo de 10 caracteres
    disco = Column(String(10)) # Define uma coluna chamada disco, que é do tipo string e tem tamanho máximo de 10 caracteres
    memoria = Column(String(10)) # Define uma coluna chamada memoria, que é do tipo string e tem tamanho máximo de 10 caracteres


Base.metadata.create_all(engine) # Cria todas as tabelas definidas pelas classes que herdam da classe Base no banco de dados usando o objeto engine