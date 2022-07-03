import { Container } from './styles';

interface TransactionsTableProps {}

export const TransactionsTable = ({}: TransactionsTableProps) => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Tìtulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 500,00</td>
            <td>Educação</td>
            <td>20/04/2020</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 500,00</td>
            <td>Educação</td>
            <td>20/04/2020</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="withdraw">- R$ 500,00</td>
            <td>Educação</td>
            <td>20/04/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
