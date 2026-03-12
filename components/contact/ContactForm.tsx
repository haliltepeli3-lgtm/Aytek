'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';

const createSchema = (t: (key: string) => string) =>
  z.object({
    company: z.string().min(1, t('validCompany')),
    name: z.string().min(1, t('validName')),
    phone: z.string().min(1, t('validPhone')),
    email: z.string().min(1, t('validEmailRequired')).email(t('validEmailInvalid')),
    message: z.string().min(10, t('validMessageMin')),
  });

type FormData = z.infer<ReturnType<typeof createSchema>>;

export default function ContactForm({ locale }: { locale: string }) {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const schema = createSchema(t);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, locale }),
      });

      if (res.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg aria-hidden="true" className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-green-800 font-medium">{t('formSuccess')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-dark mb-1">
          {t('formCompany')}
        </label>
        <input
          id="company"
          {...register('company')}
          type="text"
          autoComplete="organization"
          className={`w-full px-4 py-3 rounded-lg border ${errors.company ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors`}
          placeholder={t('formCompany')}
        />
        {errors.company && <p role="alert" className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">
          {t('formName')}
        </label>
        <input
          id="name"
          {...register('name')}
          type="text"
          autoComplete="name"
          className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors`}
          placeholder={t('formName')}
        />
        {errors.name && <p role="alert" className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1">
            {t('formPhone')}
          </label>
          <input
            id="phone"
            {...register('phone')}
            type="tel"
            autoComplete="tel"
            className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors`}
            placeholder="+90 ..."
          />
          {errors.phone && <p role="alert" className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
            {t('formEmail')}
          </label>
          <input
            id="email"
            {...register('email')}
            type="email"
            autoComplete="email"
            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors`}
            placeholder="info@..."
          />
          {errors.email && <p role="alert" className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">
          {t('formMessage')}
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none`}
          placeholder={t('formMessage')}
        />
        {errors.message && <p role="alert" className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      {status === 'error' && (
        <div role="alert" className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
          {t('formError')}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-primary py-4 disabled:opacity-70 disabled:cursor-not-allowed focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg aria-hidden="true" className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {t('formSending')}
          </span>
        ) : (
          t('formSubmit')
        )}
      </button>
    </form>
  );
}
