import PropTypes from 'prop-types';

/**
 * Объект температуры
 * @param {{createdAt: string, temperature: string}} doc
 * @return {JSX.Element}
 */
export default function ArticleTemp ({ doc = { createdAt: '', temperature: '' } }) {
  return (
    <div>{`${doc.createdAt} – ${doc.temperature}`}</div>
  );
}

ArticleTemp.propTypes = {
  doc: PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
  }).isRequired,
};
