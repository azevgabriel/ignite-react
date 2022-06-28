import { RepositoryItem } from './RepositoryItem';

const repository = {
  name: 'unform',
  description: 'Unform is a ReactJS form library',
  link: 'google.com',
};

export function RepositoryList() {
  return (
    <section className="repositoryList">
      <ul>
        <RepositoryItem
          nome={repository.name}
          description={repository.description}
          link={repository.link}
          key={1}
        />
        <RepositoryItem
          nome={repository.name}
          description={repository.description}
          link={repository.link}
          key={2}
        />
        <RepositoryItem
          nome={repository.name}
          description={repository.description}
          link={repository.link}
          key={3}
        />
      </ul>
    </section>
  );
}
