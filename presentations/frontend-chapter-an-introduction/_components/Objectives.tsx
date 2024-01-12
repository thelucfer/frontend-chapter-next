'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styles from './Objectives.module.css';

export const Objectives = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <button
      type="button"
      onClick={() => {
        setCurrentSlide((prev) => prev + 1);
      }}
      className={styles.wrapper}
    >
      <h1 className={styles.title}>Objetivos</h1>
      <ul className={styles.list}>
        <AnimatePresence>
          {currentSlide >= 1 && (
            <motion.li
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
              }}
              className={styles['list-item']}
              key="list-item-1"
            >
              Partilha de conhecimento, truques do dia-a-dia, & afins
            </motion.li>
          )}

          {currentSlide >= 2 && (
            <motion.li
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
              }}
              className={styles['list-item']}
              key="list-item-2"
            >
              Servir de referência dentro da e-core em termos de frontend
            </motion.li>
          )}
          {currentSlide >= 3 && (
            <motion.li
              initial={{ opacity: 0, width: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto', width: 'auto' }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
              }}
              className={styles['list-item']}
              key="list-item-3"
            >
              Exploração de novas tecnologias e novidades em geral no frontend e
              ecosistema JS (e além), as quais não temos contato no dia-a-dia
            </motion.li>
          )}
          {currentSlide >= 4 && (
            <motion.li
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
              }}
              className={styles['list-item']}
              key="list-item-4"
            >
              Servir como base de apoio para devs que querem entrar no mundo
              frontend
            </motion.li>
          )}
          {currentSlide >= 5 && (
            <motion.li
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
              }}
              className={styles['list-item']}
              key="list-item-4"
            >
              Nerdzar sobre nerdagens frontend com outros nerds frontend
            </motion.li>
          )}
        </AnimatePresence>
      </ul>
    </button>
  );
};
