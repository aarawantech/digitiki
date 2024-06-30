/* eslint-disable import/prefer-default-export */
import { create } from 'zustand';

export const useForm = create((set) => ({
    answers: [],
    setAnswer: (question, answer) =>
        set((state) => ({
            answers: state.answers.some((a) => a.question === question)
                ? state.answers.map((a) =>
                      a.question === question
                          ? { ...a, answer_field: answer }
                          : a
                  )
                : [...state.answers, { question, answer_field: answer }],
        })),
}));
