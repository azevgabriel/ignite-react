import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { Container } from './styles';

interface DashboardProps {}

export const Dashboard = ({}: DashboardProps) => {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
};
