import { Form } from '../../app-ui/main';
import { thermalHost } from '../consts';
import { useState } from 'react';
import ArticleTemp from './ArticleTemp';

/**
 * Добавить температуру
 * @component
 * @return {JSX.Element}
 */
export default function SetTemp () {
  const [doc, setDoc] = useState({});

  return (
    <section>
      <h2>Current temperature</h2>

      <Form action={`${thermalHost}thermal-history/create`} setState={setDoc}>
        <button type="submit">saveCurrentTemperature</button>
      </Form>

      {!!doc.id && (
        <ArticleTemp key={doc.id} doc={doc} />
      )}
    </section>
  );
}
