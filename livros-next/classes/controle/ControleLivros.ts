import { Livro } from '../modelo/Livro';

export class ControleLivro {
  livros: Array<Livro>;

  constructor() {
    const livrosStorage = localStorage.getItem('livros');
    this.livros = livrosStorage ? JSON.parse(livrosStorage) : [];
  }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maxCodigo = this.livros.reduce((max, livro) => Math.max(max, livro.codigo), 0);
    livro.codigo = maxCodigo + 1;
    this.livros.push(livro);
    this.atualizarLocalStorage();
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
      this.atualizarLocalStorage();
    }
  }

  atualizarLocalStorage(): void {
    localStorage.setItem('livros', JSON.stringify(this.livros));
  }

}
