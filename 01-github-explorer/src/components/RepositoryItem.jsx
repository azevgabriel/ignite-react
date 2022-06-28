export const RepositoryItem = ({ nome = 'DEFAULT', description, link }) => {
  return (
    <li>
      <strong>{nome}</strong>
      <p>{description}</p>
      <a>{link}</a>
    </li>
  );
};
