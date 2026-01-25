import { Svg } from '@/shared/ui/Icon/';

import { useState } from 'react';

import { isValidEmail } from '../utils/isValidEmail.ts';
import styles from './InputWrapper.module.css';

export const InputWrapper = () => {
  const [value, setValue] = useState<string>('');
  const [touched, setTouched] = useState<boolean>(false);
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const isValid = isValidEmail(value);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    setSendError(null);
    if (!isValid) {
      setTouched(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }

    setSending(true);
    const mailerUrl = '/BaseApparelComingSoon/send';

    void (async () => {
      try {
        const payload = {
          to: value,
          subject: 'Base Apparel Coming Soon Subscription',
          text: `New signup form submission:\n\nEmail: ${value}`,
        };

        const res = await fetch(mailerUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const text = await res.text().catch(() => '');
          throw new Error(text || `HTTP ${res.status}`);
        }

        setSubmitted(true);
        setValue('');
        setTouched(false);
      } catch (err) {
        setSendError(err instanceof Error ? err.message : 'Ошибка отправки.');
        setIsShaking(true);
        window.setTimeout(() => setIsShaking(false), 420);
      } finally {
        setSending(false);
      }
    })();
  };

  return (
    <>
      <form className={styles.inputWrapper} onSubmit={handleSubmit} noValidate>
        <div
          className={`${styles.input} ${value && styles.value} ${
            (touched && !isValid) || isShaking ? styles.shake : ''
          }`}
        >
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (submitted) setSubmitted(false);
              if (sendError) setSendError(null);
            }}
            onBlur={() => setTouched(true)}
            placeholder={'Email Address'}
            disabled={sending}
          />
          <Svg />
        </div>
        {touched && !isValid && <p>Please provide a valid email</p>}
        {sendError && <p>{sendError}</p>}
        {submitted && <p style={{ color: 'hsl(0, 36%, 70%)' }}>Thank you for subscribing!</p>}
      </form>
    </>
  );
};
