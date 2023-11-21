// components/Menu.tsx
import React from 'react';
import Link from 'next/link';

export const Menu: React.FC = () => {
  return (
    <nav>
      
      <Link href="/"><a>Home</a></Link>
      <Link href="/LivroLista"><a>Livro Lista</a></Link>
      <Link href="/LivroDados"><a>Livro Dados</a></Link>
    </nav>
  );
};
