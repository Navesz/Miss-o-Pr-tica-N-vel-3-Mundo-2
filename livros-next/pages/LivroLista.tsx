// pages/LivroLista.tsx
import React, { useState, useEffect } from 'react';
import { Menu } from '../componentes/Menu';
import { LinhaLivro } from '../componentes/LinhaLivro';
import styles from '../styles/Home.module.css';

const baseURL = "http://localhost:3000/api/livros";

const LivroLista = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const obterLivros = async () => {
      const res = await fetch(baseURL);
      const data = await res.json();
      setLivros(data);
    };

    obterLivros();
  }, []);

  const excluir = async (codigo) => {
    const res = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
    if (res.ok) {
      setLivros(livros.filter(livro => livro.codigo !== codigo));
    } else {
      // Tratar erro
    }
  };

  return
