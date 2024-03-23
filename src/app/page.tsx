import TransactionMenu from "@/components/TransactionMenu/TransactionMenu";
import { Container } from "@mui/material";

export default function Home() {

  return (
    <Container sx={{ bgcolor: '#cfe8fc' }} maxWidth={false}>
      <TransactionMenu />
    </Container>
  );
}
