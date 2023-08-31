import { Form } from '../../app-ui/main';
import ArticleTemp from './ArticleTemp.jsx';
import { thermalHost } from '../consts';
import { useState } from 'react';

/**
 * Список температур
 * @component
 * @return {JSX.Element}
 */
export default function DataTemp () {
  const [docs, setDocs] = useState([]);

  return (
    <section>
      <h2>Thermal history</h2>

      <Form action={`${thermalHost}thermal-history.json`} setState={setDocs}>
        <button type="submit">getTemperatures</button>
      </Form>

      {docs.map((doc) => (
        <ArticleTemp key={doc.id} doc={doc} />
      ))}
    </section>
  );
}
