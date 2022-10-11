export const initialOrang = {
    nama: 'joko',
    umur: 18
}

export function orangReducer(state = initialOrang, action) {
    switch (action.type) {
        case 'ubahNama':
            return { ...state, nama: action.value }
        case 'ubahUmur':
            return { ...state, umur: action.value }
        default:
            return state
    }
}

export const initialAlamat = {
    alamat: 'bandung'
}

export function alamatReducer(state = initialAlamat, action) {
    switch (action.type) {
        case 'ubahAlamat':
            return { ...state, alamat: action.value }
        default:
            return state
    }
}

export const initialPekerjaan = {
    pekerjaan: 'pns'
}

export function pekerjaanReducer(state = initialPekerjaan, action) {
    switch (action.type) {
        case 'ubahPekerjaan':
            return { ...state, pekerjaan: action.value }
        default:
            return state
    }
}