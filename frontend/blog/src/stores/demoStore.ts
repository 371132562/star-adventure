import { create } from 'zustand'

type RecordItem = {
  id: number | undefined
  name: string | undefined
}

type DemoStoreType = {
  record: RecordItem[]
  generateNewRecord: () => void
  deleteRecord: (payloadIndex: number) => void
  updateRecord: (payload: RecordItem) => void
}

const useStore = create<DemoStoreType>(set => ({
  record: [
    { id: 1, name: '张三' },
    { id: 2, name: '李四' },
    { id: 3, name: '王五' }
  ],
  generateNewRecord: () =>
    set(state => ({
      record: [...state.record, { id: Date.now(), name: '新用户' }]
    })),
  deleteRecord: payloadIndex =>
    set(state => ({
      record: state.record.filter((_, index) => index !== payloadIndex)
    })),
  updateRecord: payload =>
    set(state => ({
      record: state.record.map(record => (record.id === payload.id ? payload : record))
    }))
}))

export default useStore
export type { RecordItem }
