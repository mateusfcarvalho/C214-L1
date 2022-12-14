<h1 align="center">Laboratório de Engenharia de Software</h1>

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/mateusfcarvalho/C214-L1)
![GitHub language count](https://img.shields.io/github/languages/count/mateusfcarvalho/C214-L1)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/mateusfcarvalho/C214-L1)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/mateusfcarvalho/C214-L1)

</div>

# C214-L1
> Repositório destinado às aulas laboratório da disciplina de Engenharia de Software.

Conteudo das aulas seguem os tópicos de acordo com a [programação](https://iagocb.notion.site/iagocb/Laborat-rio-C214-Apresenta-o-d0f422f24536431ca4e8836b1772a958).
Para visualizar o material do professor, entre pelo link do [GitHub](https://github.com/IagoCB/lab-c214).

![](header.png)

## Development setup

>Sugestão de uso: Intellij IDEA

Ao abrir o projeto execute o comando:
```sh
npm install
```
## 🚧Caso seja necessário 🚧


Em seguida entre no [Maven Repository](https://mvnrepository.com/artifact/junit/junit) e procure por Junit selecione a versão 4.13.2 .
Copie a dependência como no exemplo abaixo: 
```sh
<!-- https://mvnrepository.com/artifact/junit/junit -->
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
</dependency>
```
Em seguida em um arquivo pom.xml, coloque dentro da tag "dependencies" (plural) o arquivo copiado.
Cada dependência ficará na sua própria tag "dependency"

```sh
<dependencies>
<!-- https://mvnrepository.com/artifact/junit/junit -->
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
</dependency>
</dependencies>
```
Refatore!!

<God save The Queen>
    <In memory of Queen Elizabeth II of UK - 8/9 >
