interface RepositoryItemProps {
  name: string;
  description: string;
  link: string;
}

export const RepositoryItem = ({
  name,
  description,
  link,
}: RepositoryItemProps) => {
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>
      <a href={link}>Acesse o link do repo</a>
    </li>
  );
};
