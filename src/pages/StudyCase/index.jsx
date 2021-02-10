/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useParams } from 'react-router-dom';
import studyCaseData from 'Data/studyCaseData';

const StudyCase = () => {
  const { studyCaseSlug } = useParams();
  const [currentStudyCase, setCurrentStudyCase] = React.useState('');

  React.useEffect(() => {
    const findStudyCase = studyCaseData.find((studyCase) => studyCase.slug === studyCaseSlug);
    setCurrentStudyCase(findStudyCase);
  }, [studyCaseSlug]);

  return (
    <div className="study-case">
      {!currentStudyCase && <h3>Aucun cas d'étude trouvé</h3>}
      {currentStudyCase && (
        <>
          <h1>{currentStudyCase.title}</h1>
          <p>{currentStudyCase.content}</p>
        </>
      )}
    </div>
  );
};

export default StudyCase;
