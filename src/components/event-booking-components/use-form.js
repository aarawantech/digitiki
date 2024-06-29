/* eslint-disable import/prefer-default-export */
import { create } from 'zustand';

export const useForm = create((set) => ({
    answers: [],
    setAnswer: (uuid, answer) =>
        set((state) => ({
            answers: state.answers.some((a) => a.uuid === uuid)
                ? state.answers.map((a) =>
                      a.uuid === uuid ? { ...a, answer_field: answer } : a
                  )
                : [...state.answers, { uuid, answer_field: answer }],
        })),
}));
