import { HTTP } from './common'

export const Note = {
	last(i) {
		return HTTP.post('/a/last/', {
        count: i
      }).then(response => {
			return response.data
		})
	},
	// delete(note) {
	// 	return HTTP.delete(`/notes/${note.id}/`)
	// },
	// list() {
	// 	return HTTP.get('/notes/').then(response => {
	// 		return response.data
	// 	})
	// }
}
