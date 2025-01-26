import { CSSProperties } from 'react';

export const styles = {
  container: {
    marginBottom: '2rem',
    gridTemplateColumns: '1fr 1fr',
    padding: '1.5rem',
    backgroundColor: '#F9FAFB',
    borderRadius: '1rem',
    
  } as CSSProperties,
  header: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '1rem',
  } as CSSProperties,
  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#4B5563',
    marginBottom: '0.5rem',
  } as CSSProperties,
  inputWrapper: {
    display: 'block',
    width: '100%',
    marginBottom: '0.5rem',
  } as CSSProperties,
  input: {
    width: '100%',
    padding: '0.5rem',
    marginTop: '0.25rem',
    borderRadius: '0.375rem',
    borderColor: '#D1D5DB',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    focus: {
      borderColor: '#3B82F6',
      outline: 'none',
      boxShadow: '0 0 0 1px rgba(59, 130, 246, 1)',
    },
  } as CSSProperties,
  textSmall: {
    fontSize: '0.875rem',
    color: '#6B7280',
  } as CSSProperties,
  description: {
    marginTop: '0.25rem',
    fontSize: '0.75rem',
    color: '#6B7280',
  } as CSSProperties,
  select: {
    width: '100%',
    padding: '0.5rem',
    marginTop: '0.25rem',
    borderRadius: '0.375rem',
    borderColor: '#D1D5DB',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    focus: {
      borderColor: '#3B82F6',
      outline: 'none',
      boxShadow: '0 0 0 1px rgba(59, 130, 246, 1)',
    },
  } as CSSProperties,
  note: {
    marginTop: '1rem',
    fontSize: '0.875rem',
    color: '#6B7280',
  } as CSSProperties,
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    '@media(min-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
    },
  } as CSSProperties,
  columnSpan: {
    gridColumn: 'span 2',
  } as CSSProperties,
  selectOption: {
    fontSize: '0.875rem',
    padding: '0.25rem',
  } as CSSProperties,
};
