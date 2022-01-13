import { format } from 'date-fns';

export function dateToString(date) {
  if (!date) { return ''; }
  return format(date, 'yyyy年M月d日 HH時mm分');
}

export function translateErrors(code) {
  const error = { title: 'エラー', descriprtion: '時間をおいてお試しください。' };
  switch (code) {
    case 'auth/invalid-email':
      error.descriprtion = 'メールアドレスが不正です。';
      break;
    default:
  }
  return error;
}
