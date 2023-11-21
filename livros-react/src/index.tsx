import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ControleLivro } from './controle/ControleLivros';
import { Livro } from './modelo/Livro';

const controleLivro = new ControleLivro();

const livrosStorage = localStorage.getItem('livros');
if (!livrosStorage) {
  controleLivro.incluir(new Livro(1, 1, 'Livro Aleatório 1', 'Resumo aleatório 1', ['Autor 1']));
  controleLivro.incluir(new Livro(2, 2, 'Livro Aleatório 2', 'Resumo aleatório 2', ['Autor 2']));
  controleLivro.incluir(new Livro(3, 3, 'Livro Aleatório 3', 'Resumo aleatório 3', ['Autor 3']));
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
