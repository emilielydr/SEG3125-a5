import './i18n';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { BMIChart } from './components/BMIChart';
import { BMILineChart } from './components/BMILineChart';

function App() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: "2rem" }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>{t("title")}</h1>
        <LanguageSwitcher />
      </header>
      <main>
        <ChartDescription />
        <BMIChart />
        <BMILineChart />
      </main>
    </div>
  );
}

function ChartDescription() {
  const { t } = useTranslation();

  return (
    <section style={{ 
      marginBottom: '1.5rem', 
      fontSize: '0.9rem', 
      color: '#555', 
      fontWeight: 'bold' 
    }}>
      <p>{t('chartDescription.paragraph1')}</p>
      <p>{t('chartDescription.paragraph2')}</p>
      <p>{t('chartDescription.paragraph3')}</p>
      <p>
        {t('chartDescription.source')}:{" "}
        <a 
          href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1310048801" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#1a0dab', textDecoration: 'underline' }}
        >
          {t('chartDescription.sourceLinkText')}
        </a>
      </p>
    </section>
  );
}



export default App;
