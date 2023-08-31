import { fetchData } from '../../app/main';

/**
 * Форма
 * @param {JSX.Element|Array=} children
 * @param {String=} action
 * @param {Function=} setState
 * @return {JSX.Element}
 */
export default function Form ({ children, action = '', setState = null }) {
  /**
   * Отправка формы
   */
  async function formSend (event) {
    event.preventDefault();

    const element = event.target;
    const formData = new FormData(element);

    const result = await fetchData(element.action, {
      body: formData,
      mode: 'cors',
    });

    if (setState) setState(result);
  }

  return (
    <form action={action} method="post" encType="multipart/form-data" onSubmit={formSend}>
      {children}
    </form>
  );
}
