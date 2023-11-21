import React, { useState, useEffect } from 'react';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

const LinhaLivro = ({ livro, excluir }) => {
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{nomeEditora}</td>
      <td>{livro.resumo}</td>
      <td>
        <ul className="list-unstyled">
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => excluir(livro.codigo)}
        >
          Excluir
        </button>
      </td>
    </tr>
  );
};

const controleLivro = new ControleLivro();

const LivroLista = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    setLivros(controleLivro.obterLivros());
  }, []);

  useEffect(() => {
    const handleLivroAdicionado = () => {
      setLivros(controleLivro.obterLivros());
    };

    window.addEventListener('livroAdicionado', handleLivroAdicionado);

    return () => {
      window.removeEventListener('livroAdicionado', handleLivroAdicionado);
    };
  }, []);

  const excluir = (codigo) => {
    controleLivro.excluir(codigo);
    setLivros([...controleLivro.obterLivros()]);
  };
  return (
    <main className="container">
      <h1 className="my-4 text-center">Catálogo de Livros</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Título</th>
            <th>Editora</th>
            <th>Resumo</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
