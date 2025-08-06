import StockFlow from '../../components/TradingViewWidget';
import Header from '../../components/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <StockFlow />
      {children}
    </>
  );
}
