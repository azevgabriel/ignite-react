import '../styles/repositories.scss';
import { useState, useEffect } from 'react';

import { RepositoryItem } from './RepositoryItem';

interface RepositoryGitHub {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<RepositoryGitHub[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/azevgabriel/repos')
      .then((response) => response.json())
      .then((repositories) => setRepositories(repositories));
  }, []);

  return (
    <section className="repositoryList">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem
            name={repository.name}
            description={repository.description}
            link={repository.html_url}
            key={repository.id}
          />
        ))}
      </ul>
    </section>
  );
}
