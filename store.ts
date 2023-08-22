import create from 'zustand'
import { EditedNote, EditedComment } from './types/types'

type State = {
  editedNote: EditedNote
  editedComment: EditedComment
  updatedEditedNote: (payload: EditedNote) => void
  updatedEditedComment: (payload: EditedComment) => void
  resetEditedNote: () => void
  resetEditedComment: () => void
}

const useStore = create<State>((set, _) => ({
  editedNote: {
    id: '',
    title: '',
    content: '',
  },
  editedComment: {
    id: '',
    content: '',
  },
  updatedEditedNote: (payload) => set({ editedNote: payload }),
  updatedEditedComment: (payload) => set({ editedComment: payload }),
  resetEditedNote: () =>
    set({ editedNote: { id: '', title: '', content: '' } }),
  resetEditedComment: () => set({ editedComment: { id: '', content: '' } }),
}))

export default useStore
