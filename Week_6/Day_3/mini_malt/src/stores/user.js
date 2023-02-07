import { atom } from 'jotai';

const firstNameAtom = atom('');
const lastNameAtom = atom('');

const fullNameAtom = atom(
  (get) => {
    const first = get(firstNameAtom);
    const last = get(lastNameAtom);
    return first && last ? `${first} ${last}` : null;
  }
);

export { firstNameAtom, lastNameAtom, fullNameAtom };
