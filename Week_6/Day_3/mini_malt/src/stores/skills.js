import { atom } from 'jotai';

const skillsAtom = atom([]);

const skillsCountAtom = atom(
  (get) => {
    const array = get(skillsAtom);
    console.log(array)
    return array ? array.length : null;
  }
);

export { skillsAtom, skillsCountAtom };
