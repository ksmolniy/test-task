import { UPDATE_FORM } from './types'

export function updateFormState(step, data) {
    return {
        type: UPDATE_FORM,
        data: { ...data },
        step,
    }
}