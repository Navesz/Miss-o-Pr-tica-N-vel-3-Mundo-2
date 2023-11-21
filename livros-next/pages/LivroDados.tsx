// pages/LivroDados.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Menu } from '../componentes/Menu';
import { ControleEditora } from '../classes/controle/ControleEditora';
import styles from '../styles/Home.module.css';

const baseURL = "http://localhost:3000/api/livros";

const controleEditora = new ControleEditora();
const opcoesEditora = controleEditora.getEditoras().map(editora => ({
  value: editora.codEditora,
  text: editora.nome,
}));

const LivroDados = () => {
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [codEditora, setCodEditora] = useState(opcoesEditora[0]?.value || 0);
  const [autores, setAutores] = useState('');
  const router = useRouter();

  const incluirLivro = async (event) => {
    event.preventDefault();
    const livro = { titulo, resumo, codEditora, autores: autores.split('\n') };
    const response = await fetch(baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(livro),
    });
    if (response.ok) {
      router.push('/LivroLista');
    } else {
      // Tratar erro
    }
  };

  return (
    <div className={styles.container}>
      <Menu />
      <main className={styles.main}>
        <h1>Dados do Livro</h1>
        <form onSubmit={incluirLivro}>
          <div>
            <label htmlFor="titulo">Título</label>
            <input id="titulo" value={titulo} onChange={e => setTitulo(e.target.value)} />
          </div>
          <div>
            <label htmlFor="resumo">Resumo</label>
            <textarea id="resumo" value={resumo} onChange={e => setResumo(e.target.value)} />
          </div>
          <div>
            <label htmlFor="editora">Editora</label>
            <select id="editora" value={codEditora} onChange={e => setCodEditora(Number(e.target.value))}>
              {opcoesEditora.map(opcao => (
                <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="autores">Autores (1 por linha)</label>
            <textarea id="autores" value={autores} onChange={e => setAutores(e.target.value)} />
          </div>
          <button type="submit">Salvar Dados</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
