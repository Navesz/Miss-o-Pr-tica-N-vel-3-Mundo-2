import { Editora } from '../modelo/Editora';

export class ControleEditora {
  editoras: Array<Editora> = [
    new Editora(1, 'Editora A'),
    new Editora(2, 'Editora B'),
    new Editora(3, 'Editora C'),
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = this.editoras.filter(e => e.codEditora === codEditora)[0];
    return editora?.nome;
  }
}
