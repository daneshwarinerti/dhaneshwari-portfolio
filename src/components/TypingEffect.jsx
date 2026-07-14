import { useState, useEffect } from 'react';

export default function TypingEffect({ words, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullWord = words[currentWordIndex];

    if (isDeleting) {
      // Deleting text
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      // Typing text
      timer = setTimeout(() => {
        setCurrentText((prev) => fullWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    // Handle full words typed
    if (!isDeleting && currentText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    }

    // Handle words completely deleted
    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span style={{ color: 'var(--color-aws-orange)', fontWeight: 'bold' }}>
      {currentText}
      <span className="cursor">|</span>
    </span>
  );
}
